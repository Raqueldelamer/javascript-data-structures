// TODO: Create Stack and Queue classes.

class Queue {

}

class Stack {

}

function isPalindrome(str) {
  // TODO: instantiate the stack and queue
  let stack ;
  let queue ;

  // TODO: Step 1: Sanitize the input (BONUS)
  let sanitizedStr; 

  // TODO: Step 2: Push characters onto stack and enqueue them into queue
  for (let i=0; i< sanitizedStr.length; i++) {
    let char = sanitizedStr[i]; 

    stack.push(char)
    queue.enqueue(char)

  }

  // TODO: Step 3: Compare characters by popping from stack and dequeuing from queue
  while (!stack.isEmpty()) {
    let a = [1,2,3,4,5];
    let b = [1,2,3,4,5]

      if (a !== b) {
          return "The string is not a palindrome.";
      }
  }

  return "The string is a palindrome.";
}

// Example usage:
let inputStr = prompt("Enter a string to check for palindrome: ");
console.log(isPalindrome(inputStr));
