function reverseString(str) {

  // Convert the 'str' argument into an array.
  const original = str.split('');

  // Initialize empty array to add characters to on each iteration.
  const reversed = [];

  // Iterate through the array-ified string
  original.forEach(letter => {

    // On each iteration, add the letter to the beginning of the 'reversed' array
    reversed.unshift(letter)
  });

  // Join the elements of the reversed array into a single string and return this value.
  return reversed.join('');
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("")

  console.log("Expecting: '!ereht olleH'");
  console.log("=>", reverseString("Hello there!"));
}

module.exports = reverseString;

// Please add your pseudocode to this file

// Initialize empty array named 'reversed'
// Split string argument into an array named 'original'
// Iterate through string
//  - On each iteration, remove the last letter and add it to the end of the 'reversed' array
// Join the elements of the 'reversed' array into one string and return that string.

// And a written explanation of your solution
