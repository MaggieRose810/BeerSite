var DrinkRow = Backbone.View.extend({
	template: _.template(
		'<td> <%= name %> </td>' +
		'<td> <%= percent %> </td>' +
		'<td> <%= isBeer %> </td>' +
		'<td> <%= ingredients %> </td>'
		),
	tagName: 'tr',
	render: function(){
		this.$el.html(this.template({
			percent: this.model.get('percent'),
			isBeer: this.model.isBeer(),
			name: this.model.get('name'),
			ingredients: this.model.get('ingredients').join(', ')
		}))
	}
})