/*Write a JavaScript program where the program takes a random integer
 between 1 to 10 and
the user is then prompted to input a guess number. If the user input matches with the 
random number, the program will display a message "Good Work" otherwise display a 
message "Not matched".*/

var guess = Math.random();
guess =Math.floor(guess*10);
guess =guess+1;
console.log(guess);
var input = prompt("Enter your lucky number from 1 to 10");
console.log(input);
if(input==guess){
    alert("Good Work");
}else{
    alert("Not Matched");
}
