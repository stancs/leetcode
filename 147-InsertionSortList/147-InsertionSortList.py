# Last updated: 4/29/2026, 10:33:53 AM
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def insertionSortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        arr = [];
        node = head
        
        def findIdx(arr, node):
            for i in range(len(arr)):
                if node.val < arr[i].val:
                    return i
            return len(arr)
            
        def insertionSort(node, arr):
            if len(arr) == 0:
                arr.append(node)
                pass
            i = findIdx(arr, node)
            newArr = arr[:i] + [node] + arr[i:]
            return newArr
                
        while node != None:
            arr = insertionSort(node, arr)
            node = node.next
        
        for i in range(len(arr)-1):
            arr[i].next = arr[i+1]
        arr[len(arr)-1].next = None
        return arr[0]