const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
let counter = 0;
while(counter<ingredients.length){
  console.log(ingredients[counter]);
  counter++;
}

// Write a for loop that prints out the contents of ingredients:
for(let counter = 0; counter < ingredients.length ; counter++){
  console.log(ingredients[counter]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
let count = ingredients.length - 1;
while(0<=count){
  console.log(ingredients[count]);
  count--;
}
