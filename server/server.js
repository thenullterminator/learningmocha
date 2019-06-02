const express=require("express");

var app=express();

app.get('/',(req,res)=>{

    res.send("<h1>Hello World!</h1>");

});

app.get('/users',(req,res)=>{

    res.status(201).send([{name:"a1",age:12},{name:"a2",age:13},{name:"a3",age:14},{name:"a4",age:15}]);

});


app.listen(3000,()=>{
    console.log("Server is up :)");
});

module.exports.app=app;

