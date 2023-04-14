var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({  
    first_name:{type: String, required:true},
    last_name:{type: String, required:true},
    email: {type: String, required:true, unique:true},
    username: {type: String, required:true, unique:true},
    password:{type:String},
    friendRequests:[],
    friendList:[],
    message:[],
});

UserSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model("User",UserSchema);