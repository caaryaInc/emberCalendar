App.DatesRoute = Ember.Route.extend({
  redirect:function(){ 
	this.transitionTo('date');  
  }
});  

App.DateRoute = Ember.Route.extend({
  model: function() {
	return selDate;
  },
  setupController: function(model) {
	controller.set('model', model);
  },
  serialize: function(model) {
	return { year_id: model.get('year'), month_id: model.get('month')+1, day_id: model.get('day')};
  }
});
