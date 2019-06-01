const utils=require("./utils");

it("should return square",()=>{
var res=utils.sqr(5);

if(res!==25)
{
    throw new Error(`${res} is wrong it should be 25`);
}

});