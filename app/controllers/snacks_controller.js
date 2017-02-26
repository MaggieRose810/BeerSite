function index (request, response){
    response.json([
    {
        id: 1,
        name: "Food Truck"
    },
    {
        id: 2,
        name: "Full Menu"
    },
    {
        id: 3,
        name: "Pretzles"
    }
    ])
    response.end();
}
module.exports = {
    index: index
}