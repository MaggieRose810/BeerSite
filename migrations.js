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
var Ingredient = require('./app/models/ingredient')

Ingredient.sync({force: true})
Drink.sync({force: true}).then(function(){
  Drink.create({
    name: 'Ophelia',
    percent: 4.2
  }).then(function(drink){
    drink.createIngredient({name: 'hops'})
    drink.createIngredient({name: 'barley'})
  })
})

