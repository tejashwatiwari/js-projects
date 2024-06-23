//A Queue works on the FIFO(First in First Out) principle.
//Queue is also a linear data structure
// To implement a queue data structure we need the following methods:

// enqueue : To add elements at end of the queue.
// dequeue: To remove an element from the front of the queue.
// peek: To get the front element without removing it.
// isEmpty: To check whether an element is present in the queue or not.
// printQueue: To print the elements present in queue.

// Enqueuing an element: O(1)
// Dequeuing an element: O(n) (as all the remaining elements need to be shifted one position to the left)
// Accessing the front of the queue: O(1)

//Initializing Queue

// Queue class
class Queue{
    // Array is used to implement a Queue
    constructor() {
        this.items = [];
    }
                 
    // Functions to be implemented
    // enqueue(item)
    // dequeue()
    // peek()
    // isEmpty()
    // printQueue()
}


//
// // enqueue function
// enqueue(element){   
//     // adding element to the queue
//     this.items.push(element);
// }


//// dequeue function
dequeue()
{
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}


//// peek function
peek()
{
    // returns the Front element of
    // the queue without removing it.
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}



// // isEmpty function
// isEmpty(){
//     // return true if the queue is empty.
//     return this.items.length == 0;
// };


// printQueue function
printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}

//IMPLEMENTATION
// creating object for queue class
var queue = new Queue();
          
// Testing dequeue and pop on an empty queue
// returns Underflow
console.log(queue.dequeue());
 
// returns true
console.log(queue.isEmpty());
 
// Adding elements to the queue
// queue contains [10, 20, 30, 40, 50]
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
 
// returns 10
console.log(queue.peek());
 
// removes 10 from the queue
// queue contains [20, 30, 40, 50, 60]
console.log(queue.dequeue());
 
// returns 20
console.log(queue.peek());
 
// removes 20
// queue contains [30, 40, 50, 60]
console.log(queue.dequeue());
 
// printing the elements of the queue
// prints [30, 40, 50, 60]
console.log(queue.printQueue());