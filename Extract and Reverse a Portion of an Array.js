function extractAndReverse(arr) {
    const subarray = arr.slice(2, 4); 
  
    // Reverse the subarray
    const reversedSubarray = subarray.reverse(); 
  
    return reversedSubarray;
  }
  
  const originalArray = [15, 30, 45, 60, 75, 90];
  const reversedSubarray = extractAndReverse(originalArray);
  
  console.log("Original array:", originalArray); // Output: [15, 30, 45, 60, 75, 90]
  console.log("Reversed subarray:", reversedSubarray); // Output: [60, 45]