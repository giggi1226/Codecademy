// reverse an array
const reverseArray = (arr) => {
  const reversed = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
  }
  return reversed;
};

const reversedArray = (arr) => {
  const reversed = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reversed[reversed.length] = arr[i];
  }
  return reversed;
};

// greet aliens
const greetAliens = (arr) => {
  for(let i = 0; i < arr.length; i++){
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`);
  }
};

// converting everything to baby
const convertToBaby = (arr) => {
  arr.forEach((element, i) => {
    arr[i] = `baby ${arr[i]}`;
  });
  return arr;
};

//fixing the code
//changed variable name to j within the for loop so we wont be changing the index the loop is using
const numbers = [5, 3, 9, 30];

const smallestPowerOfTwos = arr => {
      let results = [];
      // The 'outer' for loop - loops through each element in the array
      for (let i = 0; i < arr.length; i++) {
            number = arr[i];

            // The 'inner' while loop - searches for smallest power of 2 greater than the given number
            let j = 1;
            while (j < number) {
                  j = j * 2;
            }
            results.push(j);
      }
      return results;
};

console.log(smallestPowerOfTwo(numbers));


// decline and accept everything
// PART I
const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
};

const declineEverything = (arr) => {
  arr.forEach(element => {
    politelyDecline(element);
  });
};

// Part II
const acceptEverything = (arr) => {
  arr.forEach(element => {
    console.log(`Ok, I guess I will eat some ${element}.`);
  });
};

// square numbers
const squareNums = (arr) => arr.map(num => num * num);

// shouting greetings
const shoutGreetings = (arr) => arr.map(str => `${str.toUpperCase()}!`);

// sorting an array of years
const sortYears = (yearsArr) => yearsArr.sort();

// returns array with the items that are present in both
const justCoolStuff = (cool1, cool2) => cool1.filter((coolWord) => cool2.includes(coolWord));

// looks to see if each food item is sourced by plant
const isTheDinnerVegan = (foodArr) => foodArr.every((element) => element.source === 'plant');

// dogFactory
const dogFactory = (name, breed, weight) => ({
  name,
  breed,
  weight
});
