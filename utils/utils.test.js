const utils=require("./utils");
const expect= require("expect");
it("should return square",()=>{

var res=utils.sqr(5);
expect(res).toBe(25).toBeA('number');
});