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
    });
})