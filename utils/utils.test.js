const utils=require("./utils");
const expect= require("expect");


describe('utils',()=>{
    it("should return square",(done)=>{
        utils.sqr(5,(res)=>{
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });
});


