// Middle of the Linked List
// https://leetcode.com/problems/middle-of-the-linked-list/description/
function middleNode(head: ListNode | null): ListNode | null {
  let ahead = head
  while(ahead?.next) {
      ahead = ahead.next.next;
      head = head.next;
  }
  return head;
};