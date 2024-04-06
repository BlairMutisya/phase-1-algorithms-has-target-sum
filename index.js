function hasTargetSum(array, target) {
  // Write your algorithm here
}

/* 
  Write the Big O time complexity of your function here
  
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
function hasTargetSum(array, target) {
  // Create an empty object to store the numbers encountered so far
  let numMap = {};
  
  // Loop through the array
  for (let num of array) {
      // Calculate the difference between the target and the current number
      let diff = target - num;
      
      // If the difference exists in the numMap, return true
      if (numMap[diff]) {
          return true;
      }
      
      // Store the current number in the numMap
      numMap[num] = true;
  }
  
  // If no two numbers add up to the target, return false
  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10));    // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25));      // true
console.log(hasTargetSum([1, 2, 5], 4));               // false
console.log(hasTargetSum([-7, 10, 4, 8], 3));          // true
console.log(hasTargetSum([1, 2, 3, 4], 5));            // true
console.log(hasTargetSum([2, 2, 3, 3], 4));            // true
console.log(hasTargetSum([4], 4));                     // false
