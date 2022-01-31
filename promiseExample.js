/*Write a function which receives a string and returns a Promise.
The promise should resolve with the uppercase version of the string but should reject if the 
string is null*/
//var inp=null;- var is null
//var inp=""; var is empty
//var inp;no var declaration ,var is undefined

let myPromise = new Promise(function(myResolve,myReject)
{
    var inp=null;
    if(inp!==null){
        myResolve(inp.toUpperCase());
    }else{
        myReject("Error");
    }
}
);

myPromise.then(
function(value){
    console.log(value);
},
function(error){
    console.log(error);
}
);



let myPromise1 = new Promise(function(myResolve, myReject) {
 let x="";

// some code (try to change x to 5)

  if (x.length>=1) {
    myResolve("OK");
  } else {
    myReject("Error");
  }


});

myPromise1.then(
  function(value) {console.log(value);},
  function(error) {console.log(error);}
);