//Prompt user to place froyo order, seperating flavors by commas
const froyoInput = prompt("Place your froyo order, seperate flavors by commas"
);
const froyoFlavors = froyoInput.split(",");
console.log(froyoFlavors);


//Create a function to track the flavors

function countFlavors(flavor) {
  const froyoObject = {};
  for(let i = 0; i < flavor.length; i++) {
//If index i does not exist in the Object, create that property & give a value of 1.
   if(froyoObject[flavor[i]] ===undefined) {
    froyoObject[flavor[i]] =1;
  } else {
//If i DOES exist increment the value of that property
   froyoObject[flavor[i]] += 1;
   }
  }
  console.log(froyoObject);

}
//return the object(froyoObject);

countFlavors(froyoFlavors);






