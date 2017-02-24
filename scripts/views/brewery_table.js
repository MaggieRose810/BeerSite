var BreweryTable = Backbone.View.extend({
    tagName: 'table',
    initialize: function(){
        this.collection.on('sync', this.render, this)
        this.collection.on('add', this.addOne, this)
    },
    render: function(){
        this.$el.html(this.template())
        this.collection.forEach(this.addOne, this)
    },
    template: _.template('<tr>' +
        '<th> Name </th>' +
        '<th> Neighborhood </th>' +
        '</tr>'),
    addOne: function(brewery){
        var row = new BreweryRow({
            model: brewery
        }).render()
        this.$el.append(row.el)

    }
})