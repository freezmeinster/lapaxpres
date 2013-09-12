var mongoose = require('mongoose');

var produkSchema = new mongoose.Schema({
    nama : String,
    harga : { type: Number, min: 0 },
    stok : Number,
    kategori : String
});


mongoose.model('Produk', produkSchema);
mongoose.connect("mongodb://localhost/oleafstoko");