//3. Write a function that takes an array of integers and returns the largest difference between any two numbers in the array.**

//5. Write a function that accepts a number and returns its factorial (e.g., factorial of 5 is 5 x 4 x 3 x 2 x 1).**
function factorial(n) {
  if (n === 0 || n === 1) {
    return "1";
  } else {
    return n + " x " + factorial(n - 1);
  }
}

const num = 5;
console.log(factorial(num)); // Output: "5 x 4 x 3 x 2 x 1"

//8. Implement a function that finds the second smallest element in an array of integers.**

function secondSmallest(arr) {
  if (arr.length < 2) {
    return undefined; // Return undefined if array has less than 2 elements
  }

  let smallest = Infinity;
  let secondSmallest = Infinity;

  for (let num of arr) {
    if (num < smallest) {
      secondSmallest = smallest;
      smallest = num;
    } else if (num < secondSmallest && num !== smallest) {
      secondSmallest = num;
    }
  }

  if (secondSmallest === Infinity) {
    return undefined; // Return undefined if no second smallest element is found
  } else {
    return secondSmallest;
  }
}

// Example usage:
const numbers = [5, 2, 10, 8, 3];
console.log(secondSmallest(numbers)); // Output: 3 (second smallest number in the array)

//9. Write a function that generates a random alphanumeric string of a given length.**

function generateRandomString(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let randomString = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

console.log(generateRandomString(18)); // Output: Random alphanumeric string of length 8
