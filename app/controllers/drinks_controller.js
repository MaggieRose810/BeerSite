var Drink = require('../models/drink')
var Ingredient = require('../models/ingredient')
const index = (request, response) => {
    Drink.findAll({include: [Ingredient]}).then(function(drinks){
      response.json(drinks);
      response.end();
    })
}

const create = (request,response) => {
    Drink.create(toDrink(request.body)).then(function(drink){
      request.body.ingredients.split(', ').forEach(function(ingredient){
        drink.createIngredient({
          name: ingredient
        })
      })
      response.redirect("/index.html")
      response.end()
    })
}
function toDrink(params = {}){
    return {
        name: params.name,
        percent: parseFloat(params.percent)
    }
}
module.exports = {
    index,
    create
}