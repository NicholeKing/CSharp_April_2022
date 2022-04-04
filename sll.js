// Node class
class Node {
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

// Singly Linked List class
class SLL {
    constructor(){
        this.head = null;
    }

    // This is where all of our methods are going to live
    // How do we know if the list is empty or not?
    isEmpty(){
        // If this.head is equal to null it will return true, if it is not equal to null it will return false
        return this.head == null;
    }
    // How do we see the values in a singly linked list?
    // Send all my values to an array and print those values out
    toArray(){
        if(this.isEmpty()){
            console.log("Nothing to print");
        } else {
            var arr = [];
            var runner = this.head;
            while(runner){
                arr.push(runner.data);
                runner = runner.next;
            }
            console.log(arr);
        }
    }
    // Add a node to the list
    // The first value MUST be the head
    insertAtBack(val){
        // Step one: check if the list is empty
        if(this.isEmpty()){
            // This statement triggers if there is nothing at the head
            this.head = new Node(val);
        } else {
            // there is something already at head and we need to add to the back of the list
            // I need to go through my list until the .next points to null
            var runner = this.head;
            // Since we don't know how long we'll run, we need a while loop
            while(runner.next != null){
                // while there is still a node to move down to
                runner = runner.next; // this will move me one node down the list
            }
            // We end on the last node
            runner.next = new Node(val);
        }
    }
}

var mySll = new SLL();
// mySll.toArray();
// console.log(mySll.isEmpty());
mySll.insertAtBack(3);
mySll.insertAtBack(5);
mySll.insertAtBack(8);
mySll.insertAtBack(4);
mySll.insertAtBack(9);
mySll.insertAtBack(1);
mySll.toArray();
// console.log(mySll.isEmpty());
// console.log(mySll);

var sll2 = new SLL();