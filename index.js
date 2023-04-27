
let num1 = document.getElementById('num1').textContent = 50;
let num2 = document.getElementById('num2').textContent = 10;

function add(){
    let add = num1+num2;
    document.getElementById('total').textContent = add; 
}
function subtract(){
    let subtract = num1-num2;
    document.getElementById('total').textContent = subtract;
}
function multiply(){
    let multiply = num1 * num2;
    document.getElementById('total').textContent = multiply;
}
function divide(){
    let divide = num1 / num2;
    document.getElementById('total').textContent = divide;
}
