const expect=require("expect");
const rewire=require("rewire");

var app=rewire("./app.js");

describe('App testing',()=>{

    var db={
        saveuser:expect.createSpy()
    };

    app.__set__("db",db);

    it("should call saveuser with user object",()=>{

        var email="thisemail";
        var password="thispassword";

        app.signup(email,password);
        expect(db.saveuser).toHaveBeenCalledWith({email,password});

    });


});