var zeroBtn = document.getElementById("0");
var oneBtn = document.getElementById("1");
var twoBtn = document.getElementById("2");
var threeBtn = document.getElementById("3");
var fourBtn = document.getElementById("4");
var fiveBtn = document.getElementById("5");
var sixBtn = document.getElementById("6");
var sevenBtn = document.getElementById("7");
var eightBtn = document.getElementById("8");
var nineBtn = document.getElementById("9");

var clearBtn = document.getElementById("clear");
var backBtn = document.getElementById("back");
var equalBtn = document.getElementById("equal");
var display = document.getElementById("output"); 

var numbers = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");


var displayValue = "0";
var currentValue;
var previousValue;
var evaluate = [];
var rawNumber;

function formatNumber(num){
	var n = Number(num);
	console.log(n);
	var value = n.toLocaleString("en");
	return value;
}

function removeFormatting(num){
	console.log("removeformatting: "+ num);
	return Number(num.replace(/,/g,''));
}

function getOutput(){
	return display.innerText;
}

function updateDisplay (num) {
	formattedNumber = formatNumber(num);
	display.innerText = formattedNumber;
	return formattedNumber;
}

display.innerText = 0;

for (let i =0; i < numbers.length; i++){
	numbers[i].addEventListener("click",function(){
		rawNumber = removeFormatting(getOutput());
		if(rawNumber != NaN){
			rawNumber=rawNumber+this.id;
			updateDisplay(rawNumber);
		}
	});
}

for (let i =0; i < operator.length; i++){
	operator[i].addEventListener("click",function(){
		console.log(this.id);
		if (this.id=="clear") {
			display.innerText = "0";
		}


	});
}