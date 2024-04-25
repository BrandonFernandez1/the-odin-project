const buttons = document.querySelectorAll("button");
const display = document.querySelector(".display");

let input = '';
let num1 = '';
let operator = '';

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
            input = '';
            display.textContent = '0';
        }
        else if (button.classList.contains("equals")) {
            display.textContent = computeValue(parseFloat(num1), parseFloat(input), operator);
        }
    })
}

function computeValue(int1, int2, operator) {
    if (operator == '+') return int1 + int2;
    else if (operator == '-') return int1 - int2;
    else if (operator == '×') return int1 * int2;
    else if (operator == '÷') return int1 / int2;
}