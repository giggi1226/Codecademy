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
    console.log(`Oh powerful ${arr[i]}, we humans offer our unconditional surrender!`)
  }
}

const convertToBaby = (arr) => {
  arr.forEach((element, i) => {
    arr[i] = `baby ${arr[i]}`;
  });
  return arr;
}

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
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
      return results
}

console.log(smallestPowerOfTwo(numbers))
// Should print the returned array [ 8, 4, 16, 32 ] instead prints the returned array [8]
