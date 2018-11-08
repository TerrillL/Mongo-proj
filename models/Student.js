const mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var schoolSchema = require('mongoose').model('School').schema;

//const Student = new mongoose.Schema({
const studentSchema = new Schema({
    firstName: {type:String, trim:true, required: true},
    lastName: {type:String, trim:true, required: true},
    address: {type:String, trim:true, required: true},
    city: {type:String, trim:true, required: true},
    state: {type:String, trim:true, required: true},
    //school: {type:String, trim:true, required: true},
    school: {type: Schema.Types.ObjectId, ref: 'School', required: true},
    gradeLevel: {type:Number, default:0, required: true, max: 12},
    email: {type:String, trim:true, required: false},
    phone: {type:String, trim:true, required: false}
});

studentSchema
.virtual('name')
.get(function() {
    return this.lastName + ", " + this.firstName;
});

studentSchema
.virtual('url')
.get(function() {
    return '/api/student/' + this._id;
});

//module.exports = mongoose.model('Student', Student)
module.exports = mongoose.model('Student', studentSchema);