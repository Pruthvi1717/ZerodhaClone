const {model}= require('mongoose');
const {UserSchema}=require("../Schemas/UserSchema")

const UserModel=new model("Users", UserSchema);
module.exports= {UserModel};