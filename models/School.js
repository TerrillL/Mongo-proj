const mongoose = require('mongoose');
var Schema = mongoose.Schema;


//const School = new mongoose.Schema({
const schoolSchema = new Schema({
    name: {type:String, trim:true, default:''},
    address: {type:String, trim:true, default:''},
    city: {type:String, trim:true, default:''},
    state: {type:String, trim:true, default:''},
    usdCode: {type:Number, default: 0},
    email: {type:String, trim:true, default:''},
    phone: {type:String, trim:true, default:''}
});

//module.exports = mongoose.model('School', School)
module.exports = mongoose.model('School', schoolSchema)


//Author
//.virtual('name')
//.get(function() {
//    return name
//})