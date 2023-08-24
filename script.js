let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let res = document.getElementById("res");

const PLUS = () => {
   let plus = Number(num1.value) + Number(num2.value);
   let result = document.getElementById("result").innerHTML = plus;
};

const MINUS = () => {
   let minus = Number(num1.value) - Number(num2.value);
   let result = document.getElementById("result").innerHTML = minus;
};

const MULTIPLY = () => {
    let multiply = Number(num1.value) * Number(num2.value);
    let result = document.getElementById("result").innerHTML = multiply;
};

const DIVISION  = () => {
    let division = Number(num1.value) / Number(num2.value);
    let result = document.getElementById("result").innerHTML = division;
};