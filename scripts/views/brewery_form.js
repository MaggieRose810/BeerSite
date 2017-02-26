var BreweryForm = Backbone.View.extend({
    render: function(){
        var html
        if(this.showForm){
            html = this.formTemplate()
        } else {
            html = this.buttonTemplate()
        }
        this.$el.html(html)
    },
    events: {
        'click button': 'addBrewery',
        'submit': 'submit'
    },
    buttonTemplate: _.template('<button> Add Brewery </button>'),
    formTemplate: _.template('<form>' +
        '<label>Name' +
            '<input type="text" name="name"/>' +
         '</label>' +
         '<label>Neighborhood' +
            '<input type="text" name="neighborhood"/>' +
        '</label>' +
        '<input type="submit" value="Create Brewery"/>' +
        '</form>'),
    addBrewery: function(){
        this.showForm = true
        this.render()
    },
    submit: function(e){
        e.preventDefault();
        var brewery = new Brewery({
            name: this.$el.find('input[name="name"]').val(),
            neighborhood: this.$el.find('input[name="neighborhood"]').val()
        })
        brewery.save()
        this.breweries.push(brewery)
        this.showForm = false
        this.render()
    },
    initialize: function(options){
        this.showForm = false;
        this.breweries = options.breweries
    }
})