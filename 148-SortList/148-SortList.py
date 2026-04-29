# Last updated: 4/29/2026, 10:33:57 AM
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# 12:50s
# O(n)
# O(n)
class Solution:
    def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if(head == None):
            return None
        arr = []
        node = head
        while node != None:
            arr.append(node)
            node = node.next
        # node = head
        # while node != None:
        #     print(node.val)
        #     node = node.next
        arr = sorted(arr, key=lambda node: node.val)
        n = len(arr)
#         print("sorted")
#         for i in range(n):
#             print(arr[i].val)
        
        for i in range(n - 1):
            arr[i].next = arr[i+1]
        arr[n-1].next = None
        return arr[0]
            
        