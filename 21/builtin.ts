// Merge two sorted lists
// https://leetcode.com/problems/merge-two-sorted-lists/description
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let newHead = new ListNode(); 
  let p: ListNode | null = newHead;
  while (list1 && list2) {
      if (list1.val < list2.val) {
          p.next = list1;
          list1 = list1.next;
      } else {
          p.next = list2;
          list2 = list2.next;
      }
      p = p.next;
  }
  if(p) p.next = list1 ?? list2;
  return newHead.next;
};