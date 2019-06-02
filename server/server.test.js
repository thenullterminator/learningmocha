const app=require("./server").app;
const request=require("supertest");
const expect=require("expect");


describe('server',()=>{

    it("should include the specified user",(done)=>{
        request(app).get('/users')
            .expect(201)
            .expect((res)=>{
                expect(res.body).toInclude({
                    name:'a4',
                    age:15
                });
            })
            .end(done);
        });
});


