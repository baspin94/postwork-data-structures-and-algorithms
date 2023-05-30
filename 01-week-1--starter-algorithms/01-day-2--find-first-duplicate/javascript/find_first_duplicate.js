function findFirstDuplicate(arr) {
  let checkedValues = []
  let firstDupe = -1
  for (let i=0; i < arr.length; i++) {
    if (checkedValues.includes(arr[i])) {
      firstDupe = arr[i];
      break;
    } else {
      checkedValues.push(arr[i])
    }
  } return firstDupe;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
/*
1. Initialize empty array.
2. Iterate through input array.
  - Check if current value exists in array.
      - If YES, return current value. END.
      - If NO, add value to array and continue.
3. After finish iterating through array, return -1. END.
*/
