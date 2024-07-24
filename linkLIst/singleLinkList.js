class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkList {
  constructor() {
    this.head = null;
  }
  insertAtHead(value) {
    const tmpNode = new node(value);
    if (!this.head) {
      this.head = tmpNode;
    } else {
      tmpNode.next = this.head;
      this.head = tmpNode;
    }
  }
  insertAtEnd(value) {
    const tmpNode = new node(value);
    if (!this.head) {
      this.head = tmpNode;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = tmpNode;
    }
  }
  deleteNode(value) {
    if (!this.head) {
      console.log("the list is emtpy");
      return;
    }
    if (this.head.value == value) {
      this.head = this.head.next;
      console.log("Node deleted successfully!");
      return;
    } else {
      let curr = this.head;
      let prev = null;
      while (curr) {
        if (curr.value == value) {
          prev.next = curr.next;
          curr.next = null;
          console.log("value deleted", curr.value);
          return;
        }
        prev = curr;
        curr = curr.next;
      }
    }
    console.log("value not found in the list");
  }
  findValue(value) {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (this.head.value == value) {
      console.log("the value founded!");
      return;
    } else {
      let curr = this.head;
      while (curr) {
        if (curr.value == value) {
          console.log("the value founded!");
          return;
        }
        curr = curr.next;
      }
    }
    console.log("value is not present ");
  }
  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
}
const list = new linkList();
// list.insertAtHead(2)
// list.insertAtHead(3)
// list.insertAtHead(8)
list.insertAtEnd(2);
list.insertAtEnd(3);
list.insertAtEnd(8);
list.insertAtEnd(10);
list.deleteNode(27);
// list.findValue(11)
list.print();
