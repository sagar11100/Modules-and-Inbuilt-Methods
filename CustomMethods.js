function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
  function sumOfArray(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  }
  
  function sortAndConcat(arr1, arr2) {
    const sortedArr1 = arr1.sort((a, b) => a - b);
    const sortedArr2 = arr2.sort((a, b) => a - b);
    return sortedArr1.concat(sortedArr2);
  }
  
  const arr1 = [3, 5, 2, 8, 1];
  const arr2 = [7, 4, 6, 9];
  
  const evenNumbers = filterEvenNumbers(arr1);
  const sumOfArr1 = sumOfArray(arr1);
  const sortedAndConcatenated = sortAndConcat(arr1, arr2);
  
  console.log("Even numbers:", evenNumbers);
  console.log("Sum of arr1:", sumOfArr1);
  console.log("Sorted and concatenated array:", sortedAndConcatenated);