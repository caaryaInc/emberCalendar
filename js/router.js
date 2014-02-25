App.Router.map(function () {
  this.resource("dates", { path: "/" }, function() {
	this.resource("date", { path: "/year/:year_id/month/:month_id/day/:day_id" });
  });
});
