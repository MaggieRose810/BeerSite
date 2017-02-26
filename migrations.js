var Sequelize = require('sequelize')
global.sequelize = new Sequelize('beer_site_development', 'root', null, {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});
var Drink = require('./app/models/drink')
Drink.sync({force: true}).then(function () {
  // Table created
  return Drink.create({
    name: 'Ophelia',
    percent: 4.2
  });
});