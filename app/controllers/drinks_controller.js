var Drink = require('../models/drink')
function index (request, response){
    Drink.findAll().then(function(drinks){
      response.json(drinks);
      response.end();
    })
}

function create (request,response){
    Drink.create(toDrink(request.body)).then(function(){
      response.redirect("/index.html")
      response.end()
    })

}
function toDrink(params){
    return {
        name: params.name,
       // ingredients: params.ingredients.split(', '),
        percent: parseFloat(params.percent)
    }
}
module.exports = {
    index: index,
    create: create
}