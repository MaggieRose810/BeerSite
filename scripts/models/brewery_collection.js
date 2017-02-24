var BreweryCollection = Backbone.Collection.extend({
    url: '/breweries',
    model: Brewery
});