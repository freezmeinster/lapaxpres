var mongoose = require("mongoose");
var produk = mongoose.model("Produk");

exports.add = function(req, res){
  res.render("dashboard/produk_add");  
};

exports.add_post = function(req, res){
    var nama = req.body.nama;
    var harga = req.body.harga;
    var kategori = req.body.kategori;
    var stok = req.body.stok;
    
    new produk({
        nama : nama,
        harga: harga,
        kategori: kategori,
        stok: stok
    }).save(function(err, produk, count){
        res.redirect("/dashboard/produk");
    });
    
};

exports.edit = function(req, res){
    res.render("dashboard/produk_edit");
};

exports.edit_post = function(req, res){
    res.render("dashboard/produk_edit");
};