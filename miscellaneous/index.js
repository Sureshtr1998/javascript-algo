//1. Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

function findDuplicates(nums) {
  const counts = {};
  const duplicates = [];

  // Count occurrences of each number
  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }

  // Find numbers that appear twice
  for (let num in counts) {
    if (counts[num] === 2) {
      duplicates.push(parseInt(num));
    }
  }

  return duplicates;
}

// Example usage:
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); // Output: [2, 3]
