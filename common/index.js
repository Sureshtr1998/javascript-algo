//2. Implement a function to reverse a string without using the built-in reverse() method.**

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Example usage:
const originalString = "hello";
console.log(reverseString(originalString)); // Output: "olleh"

//3. Given an array of numbers, write a function to find the largest and smallest numbers in the array.**

function findLargestAndSmallest(arr) {
  if (arr.length === 0) {
    return { largest: undefined, smallest: undefined }; // Return undefined for an empty array
  }

  let largest = arr[0];
  let smallest = arr[0];

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
    if (num < smallest) {
      smallest = num;
    }
  }

  return { largest, smallest };
}

console.log(findLargestAndSmallest([5, 2, 10, 8, 3]));

//8. Given a string, write a function to count the occurrences of each character in the string.**

function countOccurrences(str) {
  const charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  let largest = 0;
  let val = "";
  for (let key in charCount) {
    if (charCount[key] > largest) {
      largest = charCount[key];
      val = key;
    }
  }
  return { charCount, largest, val };
}

// Example usage:
const string = "hello";
console.log(countOccurrences(string));
// Output: { h: 1, e: 1, l: 2, o: 1 }
