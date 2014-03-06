/*App.ApplicationController = Ember.ObjectController.extend({
  actions: {
	prevYear: function(){
	  // var model =  App.Date.FIXTURES[0];
	  year = selDate.get('year');
	  year--;
	  selDate.set('year',year);
	  App.date.set('year',year);
	  this.transitionTo('date'); 
	},
	nextYear: function(){
	  // var model =  App.Date.FIXTURES[0];
	  year = selDate.get('year');
  	  year++;
	  selDate.set('year',year);
	  App.date.set('year',year);
	  this.transitionTo('date'); 
	},
	prevMonth: function(){
	  // var model =  App.Date.FIXTURES[0];
	  month = selDate.get('month');
	  month--;
	  if(month<0)
		month = 11;  //Month names is an array from 0 to 11
	  selDate.set('month',month);
	  App.date.set('month',month);
	  this.transitionTo('date'); 
	},
	nextMonth: function(){
	  // var model =  App.Date.FIXTURES[0];
	  month = selDate.get('month');
	  month++;
	  if(month>11)
		month = 0;
	  selDate.set('month',month);
	  App.date.set('month',month);
	  this.transitionTo('date'); 
	},
	today: function(){
	  var date = new Date();
	  year  = date.getFullYear();
	  month = date.getMonth();
	  day = date.getDate();
	  selDate.set('month',month);
	  App.date.set('month',month);
	  selDate.set('year',year);
	  App.date.set('year',year);
	  selDate.set('day',day);
	  App.date.set('day',day);
	  this.transitionTo('date'); 
	},
	changeDate: function(param){
	  var date = param.getDate();
	  var month = param.getMonth();
	  selDate.set('day',date);
	  App.date.set('date',date);
	  selDate.set('month',month);
	  App.date.set('month',month);
	  this.transitionTo('date'); 
	}
  }
}); */