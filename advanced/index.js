//1. Implement a debounce function in JavaScript that limits the frequency of a function’s execution when it’s called repeatedly within a specified time frame.**

const debounce = (func, delay) => {
  let timeoutId;

  return () => {
    const context = this;
    const args = arguments;

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};

function myFunction() {
  console.log("Executing myFunction");
}

const debouncedFunction = debounce(myFunction, 10);
debouncedFunction();
debouncedFunction();
debouncedFunction();
debouncedFunction();
//2. Write a function that takes an array of objects and a key, and returns a new array sorted based on the values of that key in ascending order.**

const sortByKey = (array, key) => {
  return array.sort((a, b) => {
    const valueA = a[key];
    const valueB = b[key];
    return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
  });
};

console.log(
  sortByKey(
    [
      { name: "John", age: 30 },
      { name: "Alice", age: 25 },
      { name: "Bob", age: 35 },
    ],
    "age"
  )
);

//6. Write a function that checks if a given string is a palindrome, considering only alphanumeric characters and ignoring case.**

function isPalindrome(str) {
  const alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = alphanumericStr.split("").reverse().join("");
  return alphanumericStr === reversedStr;
}
console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("race car")); // Output: true
// console.log(isPalindrome("hello world")); // Output: false

//8. Implement a function that flattens a nested array in JavaScript, converting it into a single-level array.**

function flattenArray(arr) {
  let flattened = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      // If the element is an array, recursively flatten it
      flattened = flattened.concat(flattenArray(element));
    } else {
      // If the element is not an array, add it to the flattened array
      flattened.push(element);
    }
  });

  return flattened;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(flattenArray(nestedArray)); // Output: [1, 2, 3, 4, 5, 6]

//9. Write a function that determines if two strings are anagrams of each other**

function areAnagrams(str1, str2) {
  // Check if the lengths of the cleaned strings are equal
  if (str1.length !== str2.length) {
    return false;
  }

  // Sort the characters in both strings
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  // Check if the sorted strings are equal
  return sortedStr1 === sortedStr2;
}

// Example usage:
console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world")); // Output: false
console.log(areAnagrams("rail safety", "fairy tales")); // Output: true
