const mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var schoolSchema = require('mongoose').model('School').schema;

//const Student = new mongoose.Schema({
const studentSchema = new Schema({
    firstName: {type:String, trim:true, default:''},
    lastName: {type:String, trim:true, default:''},
    address: {type:String, trim:true, default:''},
    city: {type:String, trim:true, default:''},
    state: {type:String, trim:true, default:''},
    school: {type:String, trim:true, default:''},
    //school: {type: Schema.Types.ObjectId, ref: 'School'},
    gradeLevel: {type:Number, default:0},
    email: {type:String, trim:true, default:''},
    phone: {type:String, trim:true, default:''}
});

//module.exports = mongoose.model('Student', Student)
module.exports = mongoose.model('Student', studentSchema);