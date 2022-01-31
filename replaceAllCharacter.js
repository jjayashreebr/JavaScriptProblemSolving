/*Write a JavaScript to replace each character of a given string by the next one in the English 
alphabet
Note: 'a' will be replace by 'b' and 'z' would be replaced by 'a*/

var input ="bat";
const len = input.length;
var arry=[];
for(var i=0;i<len;i++){
 arry[i]=input.charCodeAt(i)+1;
}

let text="";

for(let i=0;i<len;i++){
 text =text+String.fromCharCode(arry[i]);
}
console.log(text);