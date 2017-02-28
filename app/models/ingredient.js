var Sequelize = require('sequelize')
var Ingredient = sequelize.define('ingredients', {
  name: Sequelize.STRING,
  drinkId: Sequelize.INTEGER
})
module.exports = Ingredient