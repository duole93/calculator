const numbers = document.querySelectorAll(".numPad .btn-num");
const decimal = document.querySelector(".btn-decimal");

const operators = document.querySelectorAll(".numPad .btn-op");
const equal = document.querySelector(".btn-equal");

const reset = document.querySelector(".btn-reset");
const undo = document.querySelector(".btn-delete");

const display = document.querySelector(".display");

let operand1 = 0;
let operand2 = 0;
let operator = null;
let isDecimal = false;
let isInputAccept = false;

//reset
reset.addEventListener("click", () => {
	display.textContent = "0";
	operand1 = 0;
	operand2 = 0;
	operator = null;
	isDecimal = false;
	let isInputAccept = false;
});

//delete
undo.addEventListener('click', ()=>{
	let currentDisplay = display.textContent;
	if(currentDisplay.length>1){
		display.textContent = currentDisplay.substring(0, currentDisplay.length-1);
	}
	else	
		display.textContent = '0';

})

//display number
numbers.forEach((num) => {
	num.addEventListener("click", (event) => {
		if (!isInputAccept) {
			isInputAccept = true;
			display.textContent = "";
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
		if (operator !== null) {
			operand2 = Number(display.textContent);
			display.textContent = operation(operand1, operand2, operator);
		}
		operator = op.textContent;
		operand1 = Number(display.textContent);
		isInputAccept = false;
		isDecimal = false;
	});
});

//equal
equal.addEventListener("click", () => {
	if (operator !== null) {
		operand2 = Number(display.textContent);
		let ans = Math.round(operation(operand1, operand2, operator)*1000)/1000;;
		display.textContent = ans;
		operator = null;
		isInputAccept = false;
	}
});

function operation(a, b, operator) {
	switch (operator) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "/":
			if(b===0)
				return "NAN";
			return a / b;
		case "x":
			return a * b;
	}
}
