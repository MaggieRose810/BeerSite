$(document).ready(function(){
	var drinks = new DrinkCollection();
	drinks.fetch()

	var drinkTable = new DrinkTable({
        el: '#DrinkTable',
        collection: drinks
    })
    var breweryCollection = new BreweryCollection();
    breweryCollection.fetch()

    var breweryTable = new BreweryTable({
        el: '#BreweryTable',
        collection: breweryCollection
    })
    var snacksCollection = new SnacksCollection();
    snacksCollection.fetch()

    var snacksTable = new SnacksTable({
        el: '#SnacksTable',
        collection: snacksCollection
    })
})