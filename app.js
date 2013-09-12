
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var http = require('http');
var path = require('path');
var swig = require('swig');
var db = require("./db");
var dashboard = require('./routes/dashboard');
var dashboard_produk = require('./routes/dashboard_produk');
var tools = require("./routes/tools");

var app = express();

// all environments
app.engine('html', swig.renderFile);
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use('/static',express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

app.get('/genimage/:id', tools.genimage);

app.get('/dashboard', dashboard.index)

app.get('/dashboard/produk', dashboard.produk)
app.get('/dashboard/produk/add', dashboard_produk.add);
app.post('/dashboard/produk/add', dashboard_produk.add_post);
app.get('/dashboard/produk/edit/:id', dashboard_produk.edit);
app.post('/dashboard/produk/edit/:id', dashboard_produk.edit_post);
app.get('/dashboard/produk/delete/:id', dashboard_produk.delete);

app.get('/dashboard/pelanggan', dashboard.index)

app.get('/dashboard/transaksi', dashboard.index)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
