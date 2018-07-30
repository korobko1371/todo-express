var mongoose = require("mongoose");
var Schema = mongoose.Schema;

export var businessSchema = new Schema({
    name: {type: String, required: true},
    isCompleted: {type: Boolean, required: true}
});

export default mongoose.model('Business', businessSchema);