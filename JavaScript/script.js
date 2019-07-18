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

var numbers = document.getElementsByClassName("number");
var operator = document.getElementsByClassName("operator");

var displayValue = "0"; //default value is 0 on startup
var currentValue;
var calculation;
var rawNumber;
var colorClass = "baseColor";

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


function updateDisplay (num) {
	formattedNumber = formatNumber(num);
	display.innerText = formattedNumber;
	return formattedNumber;
}

function changeColor (newColorClass) {
for (var i = 0; i < numbers.length; i++){
					numbers[i].classList.remove(colorClass);
					numbers[i].classList.add(newColorClass);
				}
				backBtn.classList.remove(colorClass);
				backBtn.classList.add(newColorClass);
				colorClass = newColorClass;
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
			changeColor("baseColor");
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
				updateDisplay("");
				changeColor("numberSub");
			}
		}
		if (this.id=="mult") {
			currentValue = removeFormatting(getOutput()).toString();
			if(currentValue){//if currentValue != null
				calculation = currentValue + "*";
				updateDisplay("");
				changeColor("numberMult");
			}
		}
		if (this.id=="divi") {
			currentValue = removeFormatting(getOutput()).toString();
			if(currentValue){//if currentValue != null
				calculation = currentValue + "/";
				updateDisplay("");
				changeColor("numberDivi");
			}
		}
		if (this.id=="add") {
			currentValue = removeFormatting(getOutput()).toString();
			console.log(currentValue);
			if(currentValue){//if currentValue != null
				calculation = currentValue + "+";
				updateDisplay("");
				changeColor("numberAdd");
			}
		}
		if (this.id=="equal") {
			currentValue = removeFormatting(getOutput()).toString();
			if(currentValue){//if currentValue != null
				currentValue = eval(calculation+currentValue);
				updateDisplay(currentValue);
				currentValue=0;
				changeColor("baseColor");
			}
		}

	});
}