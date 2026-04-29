# Last updated: 4/29/2026, 10:21:37 AM
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# 3:39s
# O(n)
# O(n)
class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        node = head
        l = []
        while node != None:
            l.append(node)
            node = node.next
        n = len(l)
        max = None
        for i in range(n):
            twinIdx = n - 1 - i
            sum = l[i].val + l[twinIdx].val
            if max == None:
                max = sum
            elif max < sum:
                max = sum
        return max