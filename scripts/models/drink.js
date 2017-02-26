var Drink = Backbone.Model.extend({
	initialize: function(){
        this.set('ingredients', []) // todo remove once API returns
    },
    isBeer: function(){
		return this.get('percent') > 2 && this.get('percent') < 18
	}
})
