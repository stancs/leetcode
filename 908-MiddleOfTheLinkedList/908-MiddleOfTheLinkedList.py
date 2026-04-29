# Last updated: 4/29/2026, 10:27:03 AM
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def middleNode(self, head: Optional[ListNode]) -> Optional[ListNode]:
        node_list = []
        node = head
        while node != None:
            node_list.append(node)
            node = node.next
        
        mid = len(node_list) // 2
        return node_list[mid]