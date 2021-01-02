module.exports.home = function(req,res){
    return res.end('<h1>This Is Home Page</h1>');
}
module.exports.profile = function(req,res){
    return res.end('<h1>This Is Profile Page</h1>');
}

