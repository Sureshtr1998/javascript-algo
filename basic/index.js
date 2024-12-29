//1. Write a JavaScript function to calculate the sum of two numbers.
const calculateTwoSum = (a, b) => {
  return a + b;
};

console.log(calculateTwoSum(2, 3));

//2. Write a JavaScript program to find the maximum number in an array.
const maxNum = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  return sorted[arr.length - 1];
};

console.log(maxNum([2, 3, 10, 23, 1]));

//3. Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards).
const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(isPalindrome("Suresh"));

//4. Write a JavaScript program to reverse a given string.**
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

console.log(reverseString("suresh"));

//5. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.**
const evenArray = (arr) => {
  const filteredData = arr.filter((a) => a % 2 === 0);
  return filteredData;
};

console.log(evenArray([10, 11, 23, 16, 8]));

//6. Write a JavaScript program to calculate the factorial of a given number.**
const factorialNum = (num) => {
  if (num < 0) {
    return "Factorial is not defined for negative numbers";
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
};

console.log(factorialNum(5));

//7. Write a JavaScript function to check if a given number is prime.**
const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  if (num <= 3) {
    return true;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime(17));

//8. Write a JavaScript program to find the largest element in a nested array.**
const nestedArray = (arr) => {
  let largest = Number.NEGATIVE_INFINITY; // Initialize with the smallest possible number
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // If the current element is an array, recursively call the function
      const nestedLargest = nestedArray(arr[i]);
      // Update the largest if the largest in the nested array is greater
      if (nestedLargest > largest) {
        largest = nestedLargest;
      }
    } else {
      // If the current element is not an array, compare it with the current largest
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  }
  return largest;
};

console.log(nestedArray([1, [2, 3], [4, 5, [6, 7, 8]], 9]));

//9. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.**
const fibonacci = (numTerms) => {
  let sequence = [0, 1]; // Initialize the sequence with the first two Fibonacci numbers

  if (numTerms <= 0) {
    return [];
  } else if (numTerms === 1) {
    return [0];
  } else if (numTerms === 2) {
    return sequence;
  } else {
    for (let i = 2; i < numTerms; i++) {
      const nextFib = sequence[i - 1] + sequence[i - 2];
      sequence.push(nextFib);
    }
    return sequence;
  }
};

console.log(fibonacci(10));

//10. Write a JavaScript program to convert a string to title case (capitalize the first letter of each word).**
const titleCase = (str) => {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] =
      words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
  return words.join(" ");
};

console.log(titleCase("hello world"));
