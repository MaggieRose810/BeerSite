var SnacksRow = Backbone.View.extend ({
    template: _.template(
        '<td> <%= name%> <td>'
        ),
    tagName: 'tr',
    render: function(){
        this.$el.html(this.template({
            name: this.model.get('name')
        }))
        return this
    }
})