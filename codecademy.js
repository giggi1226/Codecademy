// reverse an array
const reverseArray = (arr) => {
  const reversed = [];
  for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i]);
  }
  return reversed;
};
