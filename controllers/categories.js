//import {categoriesSchema} from '../models/categories';
var ObjectId = require('mongodb').ObjectID;
import Category from '../models/categories';
import Business from '../models/business';

exports.addCategory = function(req, res){
    var category = new Category(req.body);
    category.save(function(err){
        if(err) throw err;
    });
    console.log("Сохранен объект category", category);
    res.sendStatus(200);
};

exports.addBusinessIntoCategory = function(req, res){
    var newBusiness = Business(req.body);
    Category.findOne({name: req.params.name }, function (err, category) {
        if(err) throw err;
        newBusiness.save(function(err){
            if(err) throw err;
        })
        category.business.push(newBusiness);
        category.save(function(err){
            if(err) throw err;
        });
        console.log(newBusiness);
        res.sendStatus(200);
    });
}

exports.addCategory = function(req, res){
    var category = new Category({name: req.body.name}, function(err){
         if(err) throw err;
    })
    category.save(function(err){
        if(err) throw err;
    });
    res.sendStatus(200);
}

exports.all = function(req, res){
    Category.find({}, function(err, categories){
        res.json(categories);
    });
}

exports.getCategory = function(req, res){
    Category.findOne({name: req.params.name}, function(err, category){
        res.json(category);
    });
}

exports.deleteCategory = function(req, res){
  Category.findOne({name: req.body.name }, function (err, category) {
    if (err) throw err;
    var business = [];
    category.business.forEach(function(a_business){
      business.push(ObjectId(a_business._id+""));
    })
    Business.deleteMany({_id: { $in: business}}, function(err) {
      if (err) throw err;
      Category.remove({name: req.body.name}, function(err){
        if (err) throw err;
        res.sendStatus(200);
      });
    })
  });
}
