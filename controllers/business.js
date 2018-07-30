import Category from '../models/categories';
import Business from '../models/business';
var ObjectId = require('mongodb').ObjectId;

exports.changeBusinessStatus = function(req, res){
    var newStatus;
    Business.findById(req.params._id, function (err,business) {
        if (err) throw (err);
        newStatus = !business.isCompleted;
    });

    Category.update({"business._id":req.params._id},{$set:{"business.$.isCompleted": req.body.status}},false, function (err) {
        if (err) return handleError(err);
        res.sendStatus(200);
    })
}