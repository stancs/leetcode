# Last updated: 4/29/2026, 10:30:57 AM
class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        from collections import defaultdict
        dict = defaultdict(lambda: 0)
        for num1 in nums1:
            dict[num1] += 1
        print(dict)
        res = []
        for num2 in nums2:
            if dict[num2] > 0:
                dict[num2] -= 1
                res.append(num2)
        return res