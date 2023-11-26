const numbers = document.querySelectorAll(".numPad button:nth-child(-n+10)");
const decimal = document.querySelector(".btn-decimal");

const op_plus = document.querySelector(".btn-op-plus");
const op_minus = document.querySelector(".btn-op-minus");
const op_multi = document.querySelector(".btn-op-multi");
const op_division = document.querySelector(".btn-op-division");
const equal = document.querySelector(".btn-equal");

const reset = document.querySelector("btn-reset");
const percent = document.querySelector("btn-percent");
const negate = document.querySelector("btn-negate");

const display = document.querySelector(".display");

let ans = 0;
let operand1 = 0;
let operand2 = 0;
let isDecimal = false;
let operationBegin;

//display number
numbers.forEach((num) => {
	num.addEventListener("click", (event) => {
        if(display.textContent==='0')
            display.textContent='';
		display.textContent += num.textContent;
	});

});
decimal.addEventListener('click',()=>{
    if(isDecimal===false){
        display.textContent += '.';
        isDecimal=true;
    }
})



function operation(a, b, operator) {
	switch (operator) {
		case "+":
			return a + b;
		case "-":
			return a - b;
		case "/":
			return a / b;
		case "*":
			return a * b;
	}
}
