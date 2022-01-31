/*Write a JavaScript program to check whether the last digit of the three given positive 
integers is same.*/

function checkLastDigit( first, second, third){
 var flag= false;
if(first%10 === second%10){
  if(first%10===third%10){
      flag=true;
  }
}else{
    flag=false;
}
    return flag;
};
//checkLastDigit(10,20,30);