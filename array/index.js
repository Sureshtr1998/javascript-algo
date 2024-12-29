//1. Write a function that returns the sum of all numbers in an array.**
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}
const numbers = [1, 2, 3, 4, 5];
console.log(sumArray(numbers)); // Output: 15 (1 + 2 + 3 + 4 + 5 = 15)

//2. Implement a function that finds the maximum number in an array.**

function findMax(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([5, 3, 9, 2, 7]));

//3. Write a function that returns a new array containing only the unique elements from an input array.**

function uniqueElements(arr) {
  const uniqueSet = new Set(arr);
  return [...uniqueSet];
}

console.log(uniqueElements([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]

//4. Implement a function that returns the average value of numbers in an array.**

function averageValue(arr) {
  if (arr.length === 0) {
    return undefined; // Return undefined for an empty array
  }

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
}

console.log(averageValue([1, 2, 3, 4, 5]));

//8. Implement a function that merges two arrays into a single array, alternating elements from each array.**

function mergeArrays(arr1, arr2) {
  const merged = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    if (i < arr1.length) {
      merged.push(arr1[i]);
    }
    if (i < arr2.length) {
      merged.push(arr2[i]);
    }
  }

  return merged;
}

// Example usage:
const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6, 8];
console.log(mergeArrays(arr1, arr2)); // Output: [1, 2, 3, 4, 5, 6, 8]

//9. Write a function that finds the second largest number in an array.**

function findSecondLargest(arr) {
  if (arr.length < 2) {
    return undefined; // Return undefined if array has less than 2 elements
  }

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (let num of arr) {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }

  if (secondLargest === -Infinity) {
    return undefined;
  } else {
    return secondLargest;
  }
}

console.log(findSecondLargest([5, 2, 10, 8, 3]));

//10. Implement a function that groups elements in an array based on a given condition. For example, grouping even and odd numbers into separate arrays.

function groupByCondition(arr, condition) {
  const grouped = {
    true: [],
    false: [],
  };

  arr.forEach((element) => {
    const key = condition(element) ? "true" : "false";
    grouped[key].push(element);
  });

  return grouped;
}

const result = groupByCondition([1, 2, 3, 4, 5, 6], (num) => num % 2 === 0); // Grouping even and odd numbers
console.log(result); // Output: { true: [2, 4, 6], false: [1, 3, 5] }
