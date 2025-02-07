// Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/description/
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;
  while(curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
};