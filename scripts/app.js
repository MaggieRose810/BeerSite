$(document).ready(function(){
	var drinks = new DrinkCollection();
	drinks.fetch()

	var drinkTable = new DrinkTable({
        el: "#DrinkTable",
        collection: drinks
    })
	drinkTable.render()
})