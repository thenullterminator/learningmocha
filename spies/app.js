var db=require("./db");

module.exports.signup=(email,password)=>
{
    // check if email already exist
    db.saveuser({email,password});
    // send welcome email
};