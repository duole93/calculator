let ans = 0;
let operand1 = 0;
let operand2 = 0;


function operation (a , b , operator){
    switch (operator){
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '/':
            return a / b;
        case '*':
            return a * b;
    }
}
