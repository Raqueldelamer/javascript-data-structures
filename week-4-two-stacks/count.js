import Queue from "./queue.js";
import Stack from "./stack.js";

let q = new Queue();

// add items to q
q.enqueue("pistacio");
q.enqueue("choco");
q.enqueue("pistacio");
q.enqueue("choco");
q.enqueue("choco");
q.enqueue("pistacio");
q.enqueue("choco");

console.log(q); //array of items in q

let count = 0;
while (!q.isEmpty()) {
    let order = q.dequeue();
    count++;
    console.log(order);
}
console.log(count);

let s = new Stack();
//add items to stack
s.push("pistacio");
s.push("choco");
s.push("pistacio");
s.push("choco");
s.push("choco");
s.push("pistacio");
s.push("choco");

console.log(s);

let count2 = 0;
while (!s.isEmpty()) {
    s.pop();
    count2++;
}
console.log(count2);

