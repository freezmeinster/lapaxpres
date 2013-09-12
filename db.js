var mongoose = require('mongoose');

var produkSchema = new mongoose.Schema({
    nama : String,
    harga : { type: Number, min: 0 },
    stok : Number,
    kategori : String,
    image : String
});

var imageSchema = new mongoose.Schema({
    file : Buffer
});

mongoose.model('Produk', produkSchema);
mongoose.model('Image', imageSchema);
mongoose.connect("mongodb://localhost/oleafstoko");