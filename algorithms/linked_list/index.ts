import { mergeSort } from "../merge_sort/linked_list";

export class ListNode<T> {
  public value: T;
  public next?: ListNode<T>;
  public previous?: ListNode<T>;


  constructor(value: T) {
    this.value = value;
  }
}

export class LinkedList<T> {
  private head?: ListNode<T>;
  private tail?: ListNode<T>;
  public length = 0;

  constructor(values?: Array<T>) {
    if (values) {
      values.forEach(value => this.push(value))
    }
  }

  mergeSort() {
    this.head = mergeSort(this.head);
    let node = this.head;
    while (node?.next) {
      node = node?.next;
    }
    this.tail = node;
  }

  getHead() {
    return this.head;
  }

  getMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (slow?.next && fast?.next?.next) {
      slow = slow?.next;
      fast = fast?.next.next;
    }
    return slow;
  }

  unshift(value: T) {
    const node = new ListNode<T>(value);
    if (this.head) {
      node.next = this.head;
    }
    if (!this.tail) this.tail = node;
    this.head = node;
    this.length++;
  }

  push(value: T) {
    const node = new ListNode<T>(value);
    if (this.tail) {
      this.tail.next = node;
    }
    if (!this.head) {
      this.head = node;
    }
    this.tail = node;
    this.length++;
  }

  pop() {
    if (!this.tail || !this.head) return;
    let node = this.head;
    let prevNode: ListNode<T> | undefined;
    do {
      if (node?.next) {
        prevNode = node;
        node = node?.next;
      }
    } while (node?.next && node?.next != this.tail);
    if (prevNode) {
      this.tail = prevNode;
      prevNode.next = undefined;
    }
    this.length--;
    return node?.value;
  }

  shift() {
    if (!this.head) return;
    const node = this.head;
    this.head = node.next;
    this.length--;
    return node.value;
  }

  invert() {
    let newList: ListNode<T> | undefined;
    while (this.head) {
      const nextNode = this.head.next;
      this.head.next = newList;
      newList = nextNode;
      this.head = nextNode;
    }
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

const ll = new LinkedList<number>();
ll.push(0)
ll.push(1)
ll.push(2)
ll.push(3)
ll.push(4)
ll.invert()
