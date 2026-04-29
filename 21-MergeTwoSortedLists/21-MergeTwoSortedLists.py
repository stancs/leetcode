# Last updated: 4/29/2026, 10:36:38 AM
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        if not list1:
            return list2
        if not list2:
            return list1
        
        node1, node2 = list1, list2
        new_root = None
        prev, curr = None, None
        while node1 and node2:
            if node1.val < node2.val:
                curr = node1
                node1 = node1.next
            else:
                curr = node2
                node2 = node2.next
            if not prev:
                new_root = curr
            else:
                prev.next = curr
            prev = curr
        if node1:
            prev.next = node1
        if node2:
            prev.next = node2
        
        return new_root