const d = new Date();
let day = d.getDay();
var text;
switch(day) {
  case 0:
    text = "Sunday";
    break;
  case 1:
    text = "Monday";
    break;
  case 2:
    text = "Tuesday";
    break;
   case 3:
    text = "Wednesday";
    break;  
    case 4:

    text = "thursday";
    break;  
    case 5:
    text = "friday";
    break;  
    case 6:
    text = "Saturday";
    break;
}

console.log("Today is "+text);
console.log("Current time is "+d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());