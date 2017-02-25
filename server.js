console.log("Run the Server PLEASE");
var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.static('./'));

app.get('/drinks', function(request, response){
	response.json([
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
	]);
	response.end();
});
app.get('/breweries', function (request, response){
	response.json([
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

		]);
	response.end();
})
app.get('/snacks', function (request, response){
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
})


app.listen(8000);