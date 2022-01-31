/*Write a JavaScript program to remove a character at the specified position of a given string 
and return the new string.
*/

var inputStr ="mother";
var index = prompt("Enter the position")
if(index>=inputStr.length){
    index = prompt("It is out of bound of input.Enter the  new position. It should be less than "+inputStr.length)
}

var newStr = inputStr.substring(0,index)+inputStr.substring(index+1,inputStr.length);
alert(newStr);