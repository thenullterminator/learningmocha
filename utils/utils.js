module.exports.sqr=(a,callback)=>{
    setTimeout(()=>{
        
        callback(a*a);
    },2000);

};