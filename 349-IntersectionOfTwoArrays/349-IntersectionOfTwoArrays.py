# Last updated: 4/29/2026, 10:30:58 AM
class Solution:
    def intersection(self, nums1: List[int], nums2: List[int]) -> List[int]:
        from collections import defaultdict
        dict = defaultdict(lambda: None)
        for num1 in nums1:
            if dict[num1] == None:
                dict[num1] = 1
            else: 
                dict[num1] += 1
        print(dict)
        res_set = set()
        for num2 in nums2:
            val = dict[num2]
            if val != None and val >= 0:
                res_set.add(num2)
                dict[num2] -= 1
        return list(res_set)