const utils=require("./utils");
const expect= require("expect");

it("should return square",(done)=>{
    utils.sqr(5,(res)=>{
        expect(res).toBe(25).toBeA('number');
        done();
    });
});