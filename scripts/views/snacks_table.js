var SnacksTable = Backbone.View.extend({
    tagName: 'table',
    initialize: function(){
        this.collection.on('add', this.addOne, this)
        this.collection.on('sync', this.render, this)
    },
    render: function(){
        this.$el.html(this.template())
        this.collection.forEach(this.addOne, this)
    },
    template: _.template('<tr>' +
        '<th>Name</th>' +
        '</tr>'
    ),
    addOne: function(snack){
        var row = new SnacksRow({
            model: snack
        }).render()
        this.$el.append(row.el)
    }
})