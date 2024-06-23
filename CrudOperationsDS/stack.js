//STACK is linear data structure
//Follows LIFO structure
//Applications of stacks - 1. Used in function calls 2. Infix to postfix conversion 3. Parenthesis matching

//Implementation
// Stack class
class Stack {
 
    // Array is used to implement stack
    constructor()
    {
        this.items = [];
    }
 
    // Functions to be implemented
    // push(item)
    // pop()
    // peek()
    // isEmpty()
    // printStack()
}


//PUSH - pushes an element in stack - This method adds an element at the top of the stack.

// push function
push(element)
{
    // push element into the items
    this.items.push(element);
}


//Pop() : Removes an element from the stack, if the function is call on an empty stack it indicates “Underflow” . 
//This method returns the topmost element of stack and removes it. Return underflow when called on an empty stack.

// pop function
pop()
{
    // return top most element in the stack
    // and removes it from the stack
    // Underflow if stack is empty
    if (this.items.length == 0)
        return "Underflow";
    return this.items.pop();
}

//PEEK - returns the top most elements in the stack, but doesn’t delete it. 

// peek function
peek()
{
    // return the top most element from the stack
    // but does'nt delete it.
    return this.items[this.items.length - 1];
}

//isEmpty() : return true if the stack is empty 
// isEmpty function
isEmpty()
{
    // return true if stack is empty
    return this.items.length == 0;
}


// printStack() : This method returns a string in which all the element of an stack is concatenated. 
// printStack function
printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}