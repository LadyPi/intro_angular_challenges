console.log('challenge #2 -- app.js loaded!');

var app = angular.module("appTwo", []);
app.controller("WelcomeController", WelcomeController);
app.controller("WDIController", WDIController);

function WelcomeController() {
  this.full_name = "Vanessa Farias";
  this.age = 21;
  this.city = "San Francisco Bay Area";
  this.state = "California";
  this.letters = 13;
  this.shout  = function(str) {
  	return str.toUpperCase() + "!";
  	// Where is 'str' coming from
  };
}

// Exercise # 2 

function WDIController() {
  this.class_name = "WDI-29";
  this.enrolled_students = 21;
  // this.city = "San Francisco Bay Area";
  // this.state = "California";
  // this.letters = 13;
  // this.shout  = function(str) {
  // 	return str.toUpperCase() + "!";
  // 	// Where is 'str' coming from
  // };
}
