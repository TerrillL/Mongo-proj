const mongoose = require('mongoose');
var Schema = mongoose.Schema;


//const School = new mongoose.Schema({
const schoolSchema = new Schema({
    name: {type:String, trim:true, required: true},
    address: {type:String, trim:true, required: true},
    city: {type:String, trim:true, required: true},
    state: {type:String, trim:true, required: true},
    usdCode: {type:Number, default: 0, required: true},
    email: {type:String, trim:true, required: false},
    phone: {type:String, trim:true, required: false}
});

schoolSchema
.virtual('url')
.get(function () {
return '/api/school' + this._id;
});

//module.exports = mongoose.model('School', School)
module.exports = mongoose.model('School', schoolSchema)
