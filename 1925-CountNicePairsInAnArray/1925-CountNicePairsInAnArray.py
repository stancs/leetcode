# Last updated: 4/29/2026, 10:22:29 AM
class Solution:
    def countNicePairs(self, nums: List[int]) -> int:
        def rev(str):
            return int(str[::-1])
        hash = {}
        for i in range(len(nums)):
            d = nums[i] - rev(str(nums[i]))
            if hash.get(d) == None:
                hash[d] = [i]
            else:
                hash[d].append(i)
        # print(hash)
        count = 0
        for l in hash.values():
            n = len(l)
            if n > 1:
                count += int(n * (n-1) / 2)
        return count % (10**9 + 7)