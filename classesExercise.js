// build 2 classes
//  A Stack
// A Queue

class Stack {
    constructor() {

        // There must be an array to represent the stack at start and it will initialize empty.
        // Stacks typically are built with the following methods
        this.stackArray = [];
    }
    //  Push method adds to the top of the stack
    push() {
        return this.stackArray.push();
    }

    // Pop method removes from the top of the stack
    pop() {
        return this.stackArray.shift();
    }

    //  Peek logs the top element on the stack
    peek() {
        return this.stackArray[0]
    }

    isEmpty() {
        //  isEmpty returns true if the stack is empty
        if (this.stackArray === []) {
            return true
        }
        else {
            return false
        }
    }

}



//========================================================================================//
//========================================================================================//


class Queue {
    constructor() {

        // There must be an array to represent the queue and it will initialize empty.
        this.queueArray = [];
    }
    // Queues typically are built with the following methods.

    //Enqueue method adds to the back of the queue. 
    enqueue() {
        return this.queueArray.push()
    }

    // Dequeue method removes from the front of the queue.
    dequeue() {
        return this.queueArray.shift()
    }

    //  Front logs the element at the front of the queue.
    front() {
        return this.queueArray[0];
    }

    // isEmpty return true if the queue is empty.
    isEmpty() {
        if(this.queueArray === []){
            return true
        }
        return false
    }

    // printQueue returns a string of items in the queue separated by commas.
    printQueue() {
        return this.queueArray.toString()
    }

}



