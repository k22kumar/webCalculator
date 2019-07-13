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
var display = document.getElementById("display");
var history = document.getElementById("histry"); 

var numbers = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");


var displayValue = "0";
var currentValue;
var previousValue;
var calculation;
var rawNumber;

function formatNumber(num){
	if(num=="-"){//return 0 for only if remaining character is a negative sign
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

function removeFormatting(num){
	return Number(num.replace(/,/g,''));
}

function getOutput(){
	return display.innerText;
}

function getHistory(){
	return history.innerText;
}
function printHistory(num){
	formattedNumber = formatNumber(num);
	history.innerText = formattedNumber;
	return formattedNumber;
}

function updateDisplay (num) {
	formattedNumber = formatNumber(num);
	display.innerText = formattedNumber;
	return formattedNumber;
}

display.innerText = 0;

for (var i =0; i < numbers.length; i++){
	numbers[i].addEventListener("click",function(){
		rawNumber = removeFormatting(getOutput());
		if(rawNumber != NaN){
			rawNumber=rawNumber+this.id;
			updateDisplay(rawNumber);
		}
	});
}

for (var i =0; i < operator.length; i++){
	operator[i].addEventListener("click",function(){
		if (this.id=="clear") {
			display.innerText = "0";
			console.log(history);
			console.log(history.innerText);
			history.innerText = "";
		}
		if (this.id=="back") {
			currentValue = removeFormatting(getOutput()).toString();
			if(currentValue){//if currentValue != null
				currentValue = currentValue.substr(0,currentValue.length-1);
				updateDisplay(currentValue);
			}

		}
		if (this.id=="sub") {
			currentValue = removeFormatting(getOutput()).toString();
			console.log(currentValue);
			if(currentValue){//if currentValue != null
				calculation = currentValue + "-";
				console.log("sub :"+calculation);
				printHistory(calculation);
				updateDisplay("");
			}
		}
		if (this.id=="mult") {
			currentValue = removeFormatting(getOutput()).toString();
			console.log(currentValue);
			if(currentValue){//if currentValue != null
				calculation = currentValue + "*";
				console.log("mult :"+calculation);
				printHistory(calculation);
				updateDisplay("");
			}
		}
		if (this.id=="divi") {
			currentValue = removeFormatting(getOutput()).toString();
			console.log(currentValue);
			if(currentValue){//if currentValue != null
				calculation = currentValue + "/";
				console.log("divi :"+calculation);
				printHistory(calculation);
				updateDisplay("");
			}
		}
		if (this.id=="add") {
			currentValue = removeFormatting(getOutput()).toString();
			console.log(currentValue);
			if(currentValue){//if currentValue != null
				calculation = currentValue + "+";
				printHistory(calculation);
				console.log("addcalc: "+calculation);
				console.log("addhist: "+getHistory);
				updateDisplay("");
			}
		}
		if (this.id=="equal") {
			currentValue = removeFormatting(getOutput()).toString();
			console.log(currentValue);
			if(currentValue){//if currentValue != null
				currentValue = eval(calculation+currentValue);
				console.log("equal :"+ calculation);
				console.log("equal :"+calculation);
				updateDisplay(currentValue);
				currentValue=0;
			}
		}

	});
}