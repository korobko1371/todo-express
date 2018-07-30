var mongoose = require("mongoose");
var Schema = mongoose.Schema;
import {businessSchema} from './business';

export var categoriesSchema = new Schema({
    name: {type: String, required: true, unique: true},
    business: [businessSchema]
})

export default mongoose.model('Category', categoriesSchema);
