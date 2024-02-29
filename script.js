//Prompt user to place froyo order, seperating flavors by commas
const froyoOrder = prompt("Place your froyo order, seperate flavors by commas"
);


//Split the order into an array of strings.

const froyoArray = froyoOrder.split(",");


//Create a function to track the flavors

function countFlavors(array) {
  const froyoObject = []
  for(let i = 0;i < array.length;i++);
//If index i does not exist in the Object, create that property & give a value of 1.
   if(froyoObject[array[i]] ===undefined) {
    froyoObject[array[i]] =1;
   } else {
//If i DOES exist increment the value of that property
    froyoObject[array[i]] += 1;
}
}
//return the object(froyoObject);
console.table(froyoObject);
countFlavors(array);






