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

// Number 3: Count number of pistacio ice cream for two queues
let pq2 = new Queue();
let pq3 = new Queue();
let pq4 = new Queue();

pq2.enqueue("pistacio");
pq2.enqueue("choco");
pq2.enqueue("pistacio");
pq2.enqueue("pistacio");
pq2.enqueue("choco");
pq2.enqueue("pistacio");
pq2.enqueue("pistacio");

pq3.enqueue("choco");
pq3.enqueue("pistacio");
pq3.enqueue("choco");
pq3.enqueue("pistacio");
pq3.enqueue("pistacio");
pq3.enqueue("choco");
pq3.enqueue("pistacio");

pq4.enqueue("pistacio");
pq4.enqueue("choco");
pq4.enqueue("pistacio");
pq4.enqueue("choco");
pq4.enqueue("pistacio");
pq4.enqueue("choco");
pq4.enqueue("pistacio");

let pcount = 0;
let pcount2 = 0;

while (!pq2.isEmpty() && !pq3.isEmpty()) {
    let iceCream = pq2.dequeue();
    let iceCream2 = pq3.dequeue();
    if (iceCream === "pistacio") {
        pcount++;
    }
    if (iceCream2 === "pistacio") {
        pcount2++;
    }
}

let result = pcount === pcount2 ? true : false;
    console.log(result);
