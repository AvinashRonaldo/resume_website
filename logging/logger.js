
var logger=function(req,res,next){
    var param=req.path;
    var method=req.method;
    console.log('Method is %s & Path is %s',(method,param));
    next();
};
module.exports=logger;