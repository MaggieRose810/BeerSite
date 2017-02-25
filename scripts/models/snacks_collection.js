var SnacksCollection = Backbone.Collection.extend({
    url: '/snacks',
    model: Snack
});