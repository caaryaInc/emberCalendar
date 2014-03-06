App.DatesController = Ember.ArrayController.extend({
	needs : "date",
	year: function(){
		return this.get('controllers.date').get('year');
	}.property(),
	month: function(){
		return this.get('controllers.date').get('month');
	}.property(),
	day: function(){
		return this.get('controllers.date').get('day');
	}.property(),
	date: function(){
		return this.get('controllers.date').get('date');
	}.property(),
	currDate: function(){
    var   formattedDate = this.get('month')+1 + "/"
        + this.get('day')   + "/" 
        + this.get('year') ;
    return formattedDate;
  }.property('year','month','day'),
  fullDate: function(){
     var   year = this.get('year'),
           month = this.get('month'), 
           date = this.get('day') ;
    return new Date(year,month,date)
  }.property('year','month','day'),
  DatesinMonth: function(){
	var days = [],
	month = this.get('month')+1,
	year = this.get('year'),
	noofdays = new Date(year,month,0).getDate();
  	for (var i=1; i<=noofdays; i++) {
        days.push(new Date(year, month-1,i));
    }
            console.log(days);  
	return days;
  }.property('year','month'),
  DatesofPrevMonth : function(){
	var prevDates = [];
	var currMonth = this.get('month'),
		prevMonth = this.get('month')-1,
		currYear = this.get('year'),
		firstday = new Date(currYear,currMonth,1).getDay();
	for(var i=firstday; i>0; i--){
		daysinPrevMonth = new Date(currYear,prevMonth,0).getDate();
	//	console.log('days in previous month'+daysinPrevMonth);
		prevDates.push(new Date(currYear,currMonth,1-i));
	}
	return prevDates;
  }.property('year','month'),
  DatesofNextMonth : function(){
	var nextDates = [];
	var currMonth = this.get('month'),
		currYear = this.get('year'),
		daysofprevmonth = new Date(currYear,currMonth,1).getDay(),
		daysincurrmonth = new Date(currYear,currMonth+1,0).getDate(),
		daysinnextmonth = 42-(daysofprevmonth+daysincurrmonth); //There can be a maximum of 6 week rows in a calendar and hence 7*6
	for(var i = 1; i<=daysinnextmonth; i++){
		nextDates.push(new Date(currYear, currMonth, daysincurrmonth+i));
	} 
	return nextDates;
  }.property('year','month'),
  DatesinCalendarMonth : function(){ //How the dates as displayed in the calendar of a month
	var currMonth = this.get('DatesinMonth'),
		prevMonth = this.get('DatesofPrevMonth'),
		nextMonth = this.get('DatesofNextMonth');
	return (prevMonth.concat(currMonth)).concat(nextMonth);
  }.property('DatesinMonth','DatesofPrevMonth','DatesofNextMonth'),
  DatesinCalendarWeek : function(){  //How the dates are displayed weekly
	var week = [];
	var dates = this.get('DatesinCalendarMonth');
	for(i=0;i<dates.length;i+=7){
		 week.push(dates.slice(i, i+7));
	}
	console.log(week);
	return week;
  }.property('DatesinCalendarMonth') 
});



App.DateController = Ember.ObjectController.extend({
  date: function(){
   	 var year = this.get('year'),
   	 	 month = this.get('month'),
   	 	 day = this.get('day'),
   	 	 date = { year: year, month: month, day: day};
   	 	 return date;
  }.property('year','month','day')
});

