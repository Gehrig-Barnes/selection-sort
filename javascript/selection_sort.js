function selectionSort(arr) {
  return arr.sort()
}

console.log(selectionSort([3, -1, 5, 2]))

// function selectionSort(arr) {
//   // type your code here
//   // have to find minimum value and put into a new array
//   const newArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     let min = Math.min(...arr) //identify mininum value in old array
//     let minIndex = arr.indexOf(min) //locate where that minimum value is in the array

//     newArr.push(min) //push minimum value into new Array
//     arr.splice(minIndex, 1) //destroy that value in old array so that you can look for the next minimum value
//   }
//   return newArr;
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
