var mongoose = require("mongoose");
var produk = mongoose.model("Produk");
var image = mongoose.model("Image");
var fs = require('fs');

exports.add = function(req, res){
  res.render("dashboard/produk_add");  
};

exports.add_post = function(req, res){
    var nama = req.body.nama;
    var harga = req.body.harga;
    var kategori = req.body.kategori;
    var stok = req.body.stok; 
    
    new image({
      file: fs.readFileSync(req.files.gambar.path)
      }).save(function(err,img){
        new produk({
          nama : nama,
          harga: harga,
          kategori: kategori,
          stok: stok,
          image: img._id
        }).save(function(err, produk, count){
            res.redirect("/dashboard/produk");
        });
      })
  
};

exports.edit = function(req, res){
    produk.findById(req.params.id, function(err,prod,count){
        res.render("dashboard/produk_edit",{ produk: prod });
    });
};

exports.edit_post = function(req, res){
    produk.update({_id: req.params.id},{
                nama: req.body.nama,
                harga: req.body.harga,
                kategori: req.body.kategori,
                stok: req.body.stok,
                  },{ multi: false }, function(err){
        res.redirect("/dashboard/produk");
    });
};

exports.delete = function(req, res){
    produk.remove({ _id: req.params.id }, function(err){
        if (!err) {
            res.redirect("/dashboard/produk");
        }
    });
};