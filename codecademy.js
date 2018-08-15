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
