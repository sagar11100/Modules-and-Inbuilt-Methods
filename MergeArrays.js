function modifyAndMerge(arr1, arr2) {
    // Create a copy of arr1 to avoid modifying the original array
    const modifiedArr1 = [...arr1];
  
    // Use splice to replace "bike" with "bus" and "scooter"
    modifiedArr1.splice(1, 1, "bus", "scooter");
  
    // Concatenate the modified arr1 with arr2
    const mergedArray = modifiedArr1.concat(arr2);
  
    return mergedArray;
  }
  
  // Example usage:
  const arr1 = ["car", "bike", "train"];
  const arr2 = ["plane", "ship"];
  
  const mergedArray = modifyAndMerge(arr1, arr2);
  console.log(mergedArray); // Output: ["car", "bus", "scooter", "train", "plane", "ship"]