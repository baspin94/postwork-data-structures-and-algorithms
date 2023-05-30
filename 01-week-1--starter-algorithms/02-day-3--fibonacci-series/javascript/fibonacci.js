function fibonacci(num) {
  const fibArray = []
  for (let i = 0; i <= num; i++) {
    if (i === 0 || i === 1) {
      fibArray.push(i)
    } else {
      let total = fibArray[i - 1] + fibArray[i - 2]
      fibArray.push(total)
    }
  } return fibArray.slice(-1).pop()
} 

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
/*
'num' represents the index of the value we are searching for in the series.
1. Initialize empty fibonacci array.
2. Initialize a for loop with an upper limit of num.
  - If i is 0, just add 0 to the fibonacci array.
  - If i is 1, add 1 to the fib array.
  - For all other values of i, add the values at the preceding two values of i, and append to the fib array.
3. Return the last value of the array.
*/


// And a written explanation of your solution
