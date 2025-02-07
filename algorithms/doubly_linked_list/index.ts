export class ListNode<T> {
  public value: T;
  public next?: ListNode<T>;
  public previous?: ListNode<T>;


  constructor(value: T) {
    this.value = value;
  }
}

class DoublyLinkedList<T> {
  private head?: ListNode<T>;
  private tail?: ListNode<T>;
  public length = 0;

  // ADD TO FRONT
  unshift(value: T) {
    const node = new ListNode<T>(value);
    if (this.head) {
      node.next = this.head;
      this.head.previous = node;
    } else { // FIRST INSERTION ON LIST
      this.tail = node;
    }
    this.head = node;
    this.length++;
  }
  // ADD TO BACK
  push(value: T) {
    const node = new ListNode<T>(value);
    if (this.tail) {
      node.previous = this.tail;
      this.tail.next = node;
    } else { // FIRST INSERTION ON LIST
      this.head = node;
    }
    this.tail = node;
    this.length++;
  }
  // REMOVE FROM BACK
  pop() {
    if (!this.tail) return null;
    const node = this.tail;
    this.tail = node.previous;
    if (this.tail) {
      this.tail.next = undefined;
    } 
    this.length--;
    return node.value;
  }
  // REMOVE FROM FRONT
  shift() {
    if (!this.head) return null;
    const node = this.head;
    this.head = node.next;
    if(this.head) {
      this.head.previous = undefined;
    }
    this.length--;
    return node.value;
  }

  toArray(): Array<T> {
    let node: ListNode<T> | undefined = this.head;
    if (!node) return []
    const arr = []
    while (true) {
      arr.push(node.value);
      node = node.next;
      if (!node) return arr;
    }
  }
}

// const dll = new DoublyLinkedList<number>();
// dll.push(1)
// dll.push(2)
// dll.push(3)
// dll.unshift(0)
// console.log(dll.toArray())
// console.log(dll.pop())
// console.log(dll.toArray())
// console.log(dll.shift())
// console.log(dll.toArray())