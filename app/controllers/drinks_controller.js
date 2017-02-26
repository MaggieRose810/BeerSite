var drinks = [
        {
            id: 1,
            name: "Bent River IPA",
            ingredients: ["hopps", "wheat"],
            percent: 10
        },
        {
            id: 2,
            name:"Bud Light",
            ingredients: ["hopps", "barley"],
            percent: 4
        },
        {
            id: 3,
            name: "Merlot",
            ingredients: ["grapes", "tanins"],
            percent: 22
        }
    ]


function index (request, response){
    response.json(drinks);
    response.end();
}


function create (request,response){
    drinks.push(toDrink(request.body))
    response.redirect("/index.html")
    response.end()
}
function toDrink(params){
    return {
        name: params.name,
        ingredients: params.ingredients.split(', '),
        percent: parseFloat(params.percent)
    }
}
module.exports = {
    index: index,
    create: create
}