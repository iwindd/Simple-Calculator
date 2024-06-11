const display = document.getElementById("display");
const numbers = document.getElementsByTagName(`input`);

// action
const ac = document.getElementById("ac");
const parse = document.getElementById("parse");
const modulus = document.getElementById("modulus");
const division = document.getElementById("division");
const multiplication = document.getElementById("multiplication");
const subtraction = document.getElementById("subtraction");
const addition = document.getElementById("addition");
const equal = document.getElementById("equal");

// variables
let cache_numset = "";
let numset = "";
let operator = "";

// script
const updateDisplay = (text) => {
    display.value = text;

    if (text == ""){
        display.value = 0;
    }
}

const setOperator = (newOperator) => {
    operator = newOperator;
    cache_numset = numset;
    numset = "";
    updateDisplay("");
}

const getAnswer = () => {
    const numset1 = +cache_numset;
    const numset2 = +numset;
    let answer = "";

    if (operator == "+"){
        answer = numset1 + numset2
    }else if (operator == "-"){
        answer = numset1 - numset2
    }else if (operator == "%"){
        answer = numset1 % numset2
    }else if (operator == "/"){
        answer = numset1 / numset2
    }else if (operator == "*"){
        answer = numset1 * numset2
    }

    numset = String(answer)
    updateDisplay(numset);
}

for (let i=0; i < numbers.length; i++){
    const input = numbers[i];
    const number = input.getAttribute("value");
    const type = input.getAttribute("type");

    if (type != "button") continue;

    input.addEventListener("click", () => {
        const hasDot = numset.indexOf(".");
        if (number == "." && hasDot != -1) {
            return
        }

        if (number == "." && numset == ""){
            numset = "0.";
        }else{
            numset = numset + number;
        }

        updateDisplay(numset);
    })
}

equal.addEventListener("click", getAnswer);
addition.addEventListener("click", () => setOperator("+"));
subtraction.addEventListener("click", () => setOperator("-"));
modulus.addEventListener("click", () => setOperator("%"));
division.addEventListener("click", () => setOperator("/"));
multiplication.addEventListener("click", () => setOperator("*"));

ac.addEventListener("click", () => {
    if (numset == ""){
        cache_numset = "";
    }else{
        numset = "";
    }

    updateDisplay(numset);
})

parse.addEventListener("click", () => {
    let value = +numset;
    value = value * -1;
    numset = String(value);
    updateDisplay(numset);
})