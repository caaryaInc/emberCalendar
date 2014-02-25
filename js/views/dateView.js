App.dayView = Ember.View.extend({
  classNames: ["calendar-day"],
  classNameBindings: ["isOtherMonth:is-other-month","isSelectedDate:is-selected-date","isCurrentDate:is-current-date"],
  dayNum: function(){
	return this.get('date').getDate();
  }.property(),
  isOtherMonth: function() {
    var calendarMonth = this.get("month");
    var dayMonth = this.get("date").getMonth();
	return calendarMonth != dayMonth;
  }.property("month"),
  isSelectedDate: function(){
	var date = this.get('date');
	var selecteddate = this.get('selected');
	return (date.getDate()==selecteddate.getDate()) &&(date.getMonth()==selecteddate.getMonth()) &&(date.getFullYear()==selecteddate.getFullYear());
  }.property("selected"),
  isCurrentDate: function(){
	var date = this.get('date'),
		currdate = new Date();
	return (date.getDate()==currdate.getDate()) &&(date.getMonth()==currdate.getMonth()) &&(date.getFullYear()==currdate.getFullYear()); 
  }.property()
});