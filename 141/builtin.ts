// Linked list cycle
// https://leetcode.com/problems/linked-list-cycle/description/
function hasCycle(head: ListNode | null): boolean {
  let faster = head;
  let slower = head;
  while(faster?.next) {
      faster = faster.next.next;
      slower = slower.next;
      if(faster == slower) return true;
  }
  return false;
};