const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let input = '';
let num1 = '';
let operator = '';
let result = '';

for (const button of buttons) {
    button.addEventListener("click", () => {
        if (button.classList.contains("number")) {
            input += button.textContent;
            display.textContent = input;
        } else if (button.classList.contains("operator")) {
            num1 = input;
            input = '';
            operator = button.textContent;
        } else if (button.classList.contains("clear")) {
            resetCalculator()
        }
        else if (button.classList.contains("equals")) {
            result = computeValue(parseFloat(num1), parseFloat(input), operator);
            display.textContent = result;
            input = result;
            console.log(`input: ${input}`);
            console.log(`num1: ${num1}`);
            console.log(`operator: ${operator}`);
            console.log(`result: ${result}`);
        }
    })
}

function computeValue(int1, int2, operator) {
    if (operator == '+') return int1 + int2;
    else if (operator == '-') return int1 - int2;
    else if (operator == '×') return int1 * int2;
    else if (operator == '÷') return int1 / int2;
}

function resetCalculator() {
    input = '';
    num1 = '';
    operator = '';
    result = '';
    display.textContent = '0';
}

/*
console.log(`input: ${input}`);
console.log(`num1: ${num1}`);
console.log(`operator: ${operator}`);
console.log(`result: ${result}`);
*/