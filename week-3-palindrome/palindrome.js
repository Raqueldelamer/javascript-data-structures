import { input } from "@inquirer/prompts";
// TODO: Create Stack and Queue classes.
class Queue {
  constructor() {
    this.storage = [];
  }
  enqueue(item) {
    this.storage.push(item);
  }
  dequeue(){
    return this.storage.shift();
  }
  peek() {
    return this.storage[0];

  }
  isEmpty() {
    return this.storage.length === 0 ? true : false;
  }

}

class Stack {
  constructor() {
      this.storage = [];
  }
  push(items) {
      this.storage.push(items);
  }
  pop() {
      return this.storage.pop();
  }
  peek() {
      return this.storage[this.storage.length - 1];
  }
  isEmpty() {
      return this.storage.length === 0 ? true : false;
  };
}


function isPalindrome(str) {
  // TODO: instantiate the stack and queue
  let stack = new Stack();
  let queue = new Queue();

  // TODO: Step 1: Sanitize the input (BONUS)
  let sanitizedStr = str.toLowerCase().replace(); 

  // TODO: Step 2: Push characters onto stack and enqueue them into queue
  for (let i=0; i< sanitizedStr.length; i++) {
    let char = sanitizedStr[i]; 

    stack.push(char);
    queue.enqueue(char);

  }

  // TODO: Step 3: Compare characters by popping from stack and dequeuing from queue
  while (!stack.isEmpty() && !queue.isEmpty()) {
    let a = stack.pop();
    let b = queue.dequeue();

      if (a !== b) {
          return "The string is not a palindrome.";
      }
  }

  return "The string is a palindrome.";
}

// Example usage:
let inputStr = prompt("Enter a string to check for palindrome: ");
console.log(isPalindrome(inputStr));


