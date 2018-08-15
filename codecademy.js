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
