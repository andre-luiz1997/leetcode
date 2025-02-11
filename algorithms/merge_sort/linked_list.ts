// Merge sort for linked list

import { LinkedList, type ListNode } from "../linked_list/index";

function getMiddle<T>(node: ListNode<T>) {
  let slow = node;
  let fast = node;
  while (slow?.next && fast?.next?.next) {
    slow = slow?.next;
    fast = fast?.next.next;
  }
  return slow;
}

function merge<T>(list1: ListNode<T> | undefined, list2: ListNode<T> | undefined) {
  if (!list1 || !list2) return list1 || list2;
  let result: ListNode<T>;

  if (list1.value <= list2.value) {
    result = list1;
    result.next = merge(list1.next, list2);
  } else {
    result = list2;
    result.next = merge(list1, list2.next)
  }
  return result;
}

export function mergeSort<T>(node?: ListNode<T>): ListNode<T> | undefined {
  if (!node || !node.next) return node;

  const middle = getMiddle(node);
  const nextToMiddle = middle?.next;
  middle.next = undefined; //Divides list into 2 parts

  const left = mergeSort(node); //Part from start to middle
  const right = mergeSort(nextToMiddle); // Part from middle.next to end

  return merge(left, right);
}

const list = new LinkedList<number>([1,5,0,2,4,9,8,3]);
list.mergeSort()
console.log(list.toArray())