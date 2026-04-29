# Last updated: 4/29/2026, 10:19:55 AM
class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        from collections import defaultdict
        dict = defaultdict(lambda: None)
        for num1 in nums1:
            dict[num1] = True
        smallest = None
        for num2 in nums2:
            if dict[num2]:
                if smallest == None:
                    smallest = num2
                    continue
                else:
                    if num2 < smallest:
                        smallest = num2
        
        if smallest != None:
            return smallest
        else:
            return -1
            