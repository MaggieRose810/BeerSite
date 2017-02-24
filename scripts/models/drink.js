var Drink = Backbone.Model.extend({
	isBeer: function(){
		return this.get('percent') > 2 && this.get('percent') < 18
	} 
})
