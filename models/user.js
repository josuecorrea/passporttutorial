var mongoose = require('mongoose');
var bcryptjs = require('bcryptjs');


var userSchema = mongoose.Schema({
    username:{
        type:String,
        index:true
    },
    password:{
        type:String
    },
    email:{
        type:String
    },
    name:{
        type:String
    }
});;

var User = module.exports = mongoose.model('User', userSchema);

module.exports.createUser = function(newUser, callback){
    bcryptjs.genSalt(10, function(err, salt){
        bcryptjs.hash(newUser.password, salt, function(err, hash){
            newUser.password = hash;
            newUser.save(callback);
        });
    });
}