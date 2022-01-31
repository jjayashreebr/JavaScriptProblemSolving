//Higher order function
// Write a JavaScript program to pass a JavaScript function as parameter to another function

function calculator(num1,num2,operator){
    return operator(num1,num2);
}

function add(num1,num2){
    return num1+num2;
}

function sub(num1,num2){
    return num1-num2;
}

calculator(10,2,add);

