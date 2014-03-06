App.Router.map(function () {
  this.resource("dates", { path: "/" }, function() {
	this.resource("date", { path: "/year/:year_id/month/:month_id/day/:day_id" });
  });
});


App.ApplicationRoute = Ember.Route.extend({
  model : function(){
  	var date = new Date();
  	return {year: date.getFullYear(), month: date.getMonth(), day: date.getDate()};
  },
  redirect:function(model){
	this.transitionTo('date',model);  
  }
});

App.DatesRoute = Ember.Route.extend({
  actions: {
  	prevYear: function(model){
  	  var year = model.year-1;
  	  this.controllerFor('date').set('year',year);
  	  this.transitionTo('date',model); 
 	},
	nextYear: function(model){
	  var year = model.year+1;
  	  this.controllerFor('date').set('year',year);
 	  this.transitionTo('date',model);
	},
	prevMonth: function(model){
	  var month = model.month-1;
	  if(month<0)
		month = 11;
  	  this.controllerFor('date').set('month',month);
 	  this.transitionTo('date',model);
	},
	nextMonth: function(model){
	  var month = model.month+1;
	   if(month>11)
		month = 0;
  	  this.controller('date').set('month',month);
 	  this.transitionTo('date',model);
	}
  } 
})

App.DateRoute = Ember.Route.extend({
  model: function(params) {
	return {year: params.year_id, month: params.month_id, day: params.day_id};
  },
  serialize: function(model) {
  	return { year_id: model.year, month_id: model.month+1, day_id: model.day};
  } 
});
