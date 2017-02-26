var breweries = [
        {
            id: 1,
            name: "Low Down Brewery",
            neighborhood: "Capital Hill"

        },
        {
            id: 2,
            name: "Wynkoop Brewery",
            neighborhood: "LoDo"
        },
        {
            id: 3,
            name: "Epic Brewery",
            neighborhood: "RiNo"
        }

        ]

function index (request, response){
    response.json(breweries);
    response.end();
}

function create (request, response){
    breweries.push(request.body)
    response.end()
}
module.exports = {
    index: index,
    create: create
}