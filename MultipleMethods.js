function manageLibrary() {
    const library = [];
  
    function addBook(bookName) {
      library.push(bookName);
      console.log("Book added:", bookName);
      console.log("Current library:", library);
    }
  
    function removeBook(bookName) {
      const index = library.indexOf(bookName);
      if (index !== -1) {
        library.splice(index, 1);
        console.log("Book removed:", bookName);
        console.log("Current library:", library);
      } else {
        console.log("Book not found.");
      }
    }
  
    function searchBook(bookName) {
      if (library.includes(bookName)) {
        console.log(`Book "${bookName}" found.`);
      } else {
        console.log(`Book "${bookName}" not found.`);
      }
    }
  
    function findFirstAndLastOccurrence(bookName) {
      const firstIndex = library.indexOf(bookName);
      const lastIndex = library.lastIndexOf(bookName);
      console.log(`First occurrence: ${firstIndex}`);
      console.log(`Last occurrence: ${lastIndex}`);
    }
  
    function extractSublist(startIndex, endIndex) {
      const sublist = library.slice(startIndex, endIndex + 1);
      console.log("Extracted sublist:", sublist);
    }
  
    function sortBooks() {
      library.sort();
      console.log("Sorted library:", library);
    }
  
    function replaceBook(index, newBookName) {
      library.splice(index, 1, newBookName);
      console.log("Book replaced:", library);
    }
  
    function joinBookTitles() {
      const bookTitles = library.join(", ");
      console.log("Book titles:", bookTitles);
    }
  
    addBook("The Lord of the Rings");
    addBook("Harry Potter");
    addBook("Pride and Prejudice");
    addBook("The Lord of the Rings"); // Duplicate book
  
    searchBook("Harry Potter");
    searchBook("The Hobbit");
  
    findFirstAndLastOccurrence("The Lord of the Rings");
  
    extractSublist(1, 2);
  
    sortBooks();
  
    replaceBook(2, "The Great Gatsby");
  
    joinBookTitles();
  }
  
  manageLibrary();