console.log('challenge #3 -- app.js loaded!');

var app = angular.module("appThree", []);
app.controller("infoController", infoController);
app.controller("loanController", loanController);

function infoController(){
  this.name = "Jon Doe"; // default name
  this.info.height = 5.6; // default height in feet
}

function loanController() {
	this.loan.amount = 12.00;
	this.loan.apr = 2;
	this.loan.month = 12;
	this.accrued_interest = loan.apr * loan.amount;
	this.total_balance = loan.amount + accrued_interest;
}
