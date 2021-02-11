// morning algos
// singly linked list

class Node {
    constructor(data) {
        this.data = data
        this.next = null

    }
}

class SLL {
    constructor() {
        this.head = null
    }
    // console.log the data of every node in the current list
    read() {
        var runner = this.head
        while (runner) {
            console.log(runner.data)
            runner = runner.next

        }

    }
    //find: return true/false if current list contains a data equal to value
    contains(value) {
        var runner = this.head
        while (runner) {
            if (runner.data === value) {
                return true
            }
            runner = runner.next
        }
        return false

    }
    // Remove from front: remove and return the first node in SLL
    removeFromFront() {
        var temp = this.head
        this.head = this.head.next
        temp.next = null
        return temp


    }
    // sll.head --> () --> () --> () --> null

    // return true or false if this.head is null
    isEmpty() {
        if (this.head) {
            return true
        }
        else {
            return false;
        }
    }
    // add given node to the head, if it exists, return void
    addToFront(node) {
        node.next = this.head // set the new node's next to the head
        this.head = node // move the head to the new node


    }
    // create new node with given data, add it to the head, return void
    addDataToFront(data) {
        var newNode = new Node(data) // create a new node with the data
        newNode.next = this.head // set the new node's next to the head
        this.head = newNode // move the head to the new node
    }
    size() {
        let count = 0;
        let runner = this.head;
        while (runner) {
            count++;
            runner = runner.next
        }
        return count;
    }
    delete(data) {
        // if val is contained within the current list, delete it.
        // return void
        // assume there are no duplicates
        // consider the edge case if you have to delete the head node
        // consider the edge case your list is empty
        // consider the edge case that your list does not contain the val

        let runner = this.head
        // check if head is empty
        if (!runner) {
            return;
        }
        // check if head is target 
        if (runner.data == data) {
            this.removeFromFront()
            return
        }
        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return 
                runner.next = runner.next.next
                return
            }
        }
        // other traverse
        runner = runner.next

    }
    deleteV2(data) {
        var runner = this.head
        var prev = null

        // if head is val 

    }

    clear() {
        this.head = null
    }
}



var mySLL = new SLL()
mySLL.addDataToFront(10)
mySLL.addDataToFront(100)
mySLL.addDataToFront(1000)
mySLL.addDataToFront(10000)
mySLL.addDataToFront(100000)
mySLL.addDataToFront(1000000)

mySLL.read()
mySLL.removeFromFront()
mySLL.read()
console.log(mySLL.contains(100))
console.log(mySLL.contains(50))
console.log(mySLL.size())
// console.log(mySLL.clear())
console.log(mySLL.delete(100))
// var node = new Node(10)
// node.data = 10
// node.next = new Node()

// var head = {
//     data: 7, 
//     next: {

//     }
// }
// var runner = head
// while(runner.next != null){
//     runner = runner.next
// }

// console.log(runner.data) // prints 5