var DrinkTable = Backbone.View.extend({
	tagName: 'table',
	template: _.template(
			'<tr>' +
				'<th>' +
					'Name' +
				'</th>' +
				'<th>' +
					'Percent' +
				'</th>' +
				'<th>' +
					'Is Beer' +
				'</th>' +
				'<th>' +
					'Ingredients' +
				'</th>' +
			'</tr>'
			),
	initialize: function(){
		this.collection.on('add', this.addOne, this);
		this.collection.on('sync', this.render, this);
	},
	render: function(){
		this.$el.html(this.template())
		this.collection.forEach(this.addOne, this);
	},
	addOne: function(drink){
		var drinkRow = new DrinkRow({model: drink});
		drinkRow.render();
		this.$el.append(drinkRow.el);
	}
})