var DrinkCollection = Backbone.Collection.extend({
	url: '/drinks',
	model: Drink
});