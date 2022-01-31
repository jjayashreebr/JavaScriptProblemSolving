/*Write a JavaScript program to find the largest of three given integers.
*/

function largest(first,second,third){
var max;    
if(first>second){
    if(first>third){
        max=first;
    }else{
        max=third;
        //alert("inside third>first")
    }
}else{
    //alert(second);
    if(second>third){
    //alert("inside second>third");
        max=second;
    }else{
        //alert("inside third>second");
        max=third;
    }
}

console.log("Largest number in "+first+","+second+", and "+third+" is "+max);
}