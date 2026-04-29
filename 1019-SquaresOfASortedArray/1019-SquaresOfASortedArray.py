# Last updated: 4/29/2026, 10:26:28 AM
class Solution:
    def sortedSquares(self, nums: List[int]) -> List[int]:
        def square(n):
            return n * n
        
        return sorted(map(square, nums))
    
    def sortedSquares(self, nums: List[int]) -> List[int]:
        def square(n):
            return n * n
        
        group1, group2 = [], []
        for num in nums:
            if num >= 0:
                group2.append(square(num))
            else:
                group1 = [square(num)] + group1
        print(group1, group2)
        res = []
        while len(group1) > 0 and len(group2) > 0:
            if group1[0] > group2[0]:
                res.append(group2.pop(0))
            else:
                res.append(group1.pop(0))
        if len(group1) > 0:
            res = res + group1
        if len(group2) > 0:
            res = res + group2
        
        return res