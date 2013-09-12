var mongoose = require("mongoose");
var image = mongoose.model('Image');

exports.genimage = function(req,res){
    image.findById(req.params.id, function(err, img){
        res.send(img.file);
    });
};