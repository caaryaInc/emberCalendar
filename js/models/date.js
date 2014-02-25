App.Date = DS.Model.extend({
  year: DS.attr('number'),
  month: DS.attr('number'),
  day: DS.attr('number')
});


App.currDate = Ember.Object.extend({
  id:1,
  date: function(){
	return new Date()
  }.property(),
  year: function(){
	return this.get('date').getFullYear();
  }.property('date'),
  month: function(){
	return this.get('date').getMonth();
  }.property('date'),
  day: function(){
	return this.get('date').getDate();
  }.property('date')
});

var selDate =  App.currDate.create();
App.Date.FIXTURES = [selDate];
//console.log('year is'+ selDate.get('year'));





