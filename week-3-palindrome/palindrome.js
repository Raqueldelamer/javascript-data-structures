// TODO: Create Stack and Queue classes.

class Queue {

}

class Stack {
  constructor() {
      this.items = [];
  }
  push(names) {
      this.items.push(names);
  }
  pop() {
      return this.items.pop();
  }
  peek() {
      return this.items[0];
  }
  isEmpty() {
      return this.items.length === 0;
  };
}
let s = new Stack();
s.push("Alice");
s.push("Beatrice");
s.push("Caroline");
console.log(s);
s.push("David");
console.log(s);

let first = s.pop();
console.log(first);

let last = s.peek();
console.log(last);
console.log(s.isEmpty());

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
