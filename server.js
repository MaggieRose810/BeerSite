console.log("Run the Server PLEASE");
var fs = require('fs');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var breweriesCtrl = require('./app/controllers/breweries_controller')
var drinksCtrl = require('./app/controllers/drinks_controller')
var snacksCtrl = require('./app/controllers/snacks_controller')
app.use(express.static('./'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.get('/breweries', breweriesCtrl.index)
app.post('/breweries', breweriesCtrl.create)
app.get('/drinks', drinksCtrl.index)
app.post('/drinks', drinksCtrl.create)
app.get('/snacks', snacksCtrl.index)
app.listen(8000);