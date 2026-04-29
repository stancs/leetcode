# Last updated: 4/29/2026, 10:30:08 AM
class Solution:
    def findDisappearedNumbers(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ref = [0] * n
        for num in nums:
            ref[num - 1] = 1
        print(ref)
        ret = []
        for idx, item in enumerate(ref):
            print(f"idx: {idx}, item: {item}")
            if item == 0:
                ret.append(idx + 1)
        
        return ret