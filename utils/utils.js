module.exports.sqr=(a,callback)=>{
    setTimeout(()=>{
        
        callback(a*a);
    },1000);

};