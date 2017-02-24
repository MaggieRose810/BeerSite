var BreweryRow = Backbone.View.extend ({
    template: _.template(
        '<td> <%= name%> <td>' +
        '<td> <%= neighborhood%> <td>'
        ),
    tagName: 'tr',
    render: function(){
        this.$el.html(this.template({
            name: this.model.get('name'),
            neighborhood: this.model.get('neighborhood')
        }))
        return this
    }
})