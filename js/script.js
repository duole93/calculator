const numbers = document.querySelectorAll(".numPad button:nth-child(-n+10)");
const decimal = document.querySelector(".btn-decimal");

const operators = document.querySelectorAll(".operator button:nth-child(-n+4)");
const equal = document.querySelector(".btn-equal");

const reset = document.querySelector(".btn-reset");
const percent = document.querySelector(".btn-percent");
const negate = document.querySelector(".btn-negate");

const display = document.querySelector(".display");

let ans = 0;
let operand1 = 0;
let operand2 = 0;
let operator = "";
let isDecimal = false;

//fa
let isInputAccept = false;

//display reset and accept new number input
function displayInputReset() {
	isInputAccept = true;
	display.textContent = "";
}

//reset
reset.addEventListener("click", () => {
	display.textContent = "0";
	ans = 0;
	operand1 = 0;
	operand2 = 0;
	operator = "";
	isDecimal = false;
});

//display number
numbers.forEach((num) => {
	num.addEventListener("click", (event) => {
		if (!isInputAccept) {
			displayInputReset();
		}
		display.textContent += num.textContent;
	});
});

decimal.addEventListener("click", () => {
	//when display is empty
	if (!isInputAccept) {
		display.textContent += ".";
		isInputAccept = true;
	}
	//when display is not empty
	else {
		if (isDecimal === false) {
			display.textContent += ".";
		}
	}
	isDecimal = true;
});

//operator
operators.forEach((op) => {
	op.addEventListener("click", (event) => {
		operator = op.textContent;
		operand1 = parseInt(display.textContent);
		isInputAccept = false;
	});
});

//equal
equal.addEventListener("click", () => {
	operand2 = parseInt(display.textContent);
	ans = operation(operand1, operand2, operator);
	display.textContent = ans;
	isInputAccept = false;
});

function operation(a, b, operator) {
	switch (operator) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "/":
			return a / b;
		case "x":
			return a * b;
	}
}
