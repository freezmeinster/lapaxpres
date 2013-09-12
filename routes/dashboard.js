var mongoose = require("mongoose");
var produk = mongoose.model("Produk");

exports.index = function(req, res){
  res.render("dashboard/index");
};

exports.produk = function(req, res){
  produk.find(function(err, prod, count){
    res.render("dashboard/produk", { produklist: prod });
  });
};
