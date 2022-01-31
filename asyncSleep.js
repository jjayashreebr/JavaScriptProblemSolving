/* Write an async function which waits 500 milliseconds and then returns the uppercase of a 
given string. Use the sleep function provided.
*/
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(input.toUpperCase());
    }, 500);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

var input="hello";

asyncCall(input);
