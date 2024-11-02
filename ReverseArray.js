function extractAndReverse(arr) {
    // Extract the subarray from the third to fifth element (exclusive)
    const subarray = arr.slice(2, 5);
  
    // Reverse the subarray
    const reversedSubarray = subarray.reverse();
  
    return reversedSubarray;
  }
  
  const numbers = [15, 30, 45, 60, 75, 90];
  const reversedSubarray = extractAndReverse(numbers);
  console.log(reversedSubarray); // Output: [60, 45]