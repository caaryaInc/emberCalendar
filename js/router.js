App.Router.map -> 
  @resource "dates", -> 
	@resource "date",  path: "/year/:year/month/:month/day/:day" 
  

App.ApplicationRoute = Ember.Route.extend
  model : ->
  	new Date()
  redirect: -> (model)
	@transitionTo "date",model  
  
App.DateRoute = Ember.Route.extend
  model: -> (params) 
  	year : params.year
  	month : params.month
  	day: params.day
	new Date(year,month,day)
  serialize: -> (model) 
  	{ year: model.getFullYear(), month: model.getMonth()+1, day: model.getDate() }
  actions: 
  	prevYear: -> (model)
  	  year = model.year-1
   	  @transitionTo "date",model 
 	nextYear: -> (model)
	  year = model.year+1
  	  @transitionTo "date",model
	prevMonth: -> (model)
	  month = model.month-1
	  if month<0 then month = 11
  	  @transitionTo "date",model
	nextMonth: -> (model)
	  month = model.month+1;
	  if month>11 then month=0
 	  @transitionTo "date",model
