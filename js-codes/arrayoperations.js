function find_element(arr, element) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === element) {
        return i; // Return the index if element found
      }
    }
    return -1; // Return -1 
  }
  
  var arr = [3, 5, 6, 7, 8];
  console.log(find_element(arr, 3)); // Output: 0 (index of 3 in the array)
  console.log(find_element(arr, 9)); // Output: -1 (element 9 not found)