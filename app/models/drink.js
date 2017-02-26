var Sequelize = require('sequelize')
var Drink = sequelize.define('drinks', {
  name: {
    type: Sequelize.STRING,
  },
  percent: {
    type: Sequelize.FLOAT
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
});

module.exports = Drink