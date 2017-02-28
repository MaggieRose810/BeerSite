var Drink = Backbone.Model.extend({
    isBeer: function(){
		  return this.get('percent') > 2 && this.get('percent') < 18
	  },
    ingredientsList: function(){
      return this.get('ingredients').map(function(ingredient){
        return ingredient.name
      }).join(', ')
    }
})
