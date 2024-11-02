function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];
  
    // Add "David" at index 1
    students.splice(1, 0, "David"); // Insert "David" without removing any elements
  
    // Check if "Eve" is in the list
    console.log(students.includes("Eve")); // Output: false
  
    // Convert the array to a string with names separated by commas
    console.log(students.join(",")); // Output: "Alice, David, Bob, Charlie"
  }
  
  // Call the function to execute the operations
  manageStudents();