# Last updated: 4/29/2026, 10:20:32 AM
class Solution:
    # def countBadPairs(self, nums: List[int]) -> int:
    #     count = 0
    #     def is_badpair(i, j):
    #         return j - i != nums[j] - nums[i]
    #     for i in range(len(nums)-1):
    #         for j in range(i+1, len(nums)):
    #             if is_badpair(i, j):
    #                 count += 1
    #     return count
    def countBadPairs(self, nums: List[int]) -> int:
        count = 0
        hash = {}
        for i in range(len(nums)):
            d = nums[i] - i
            if hash.get(d) is None:
                hash[d] = [i]
            else:
                hash[d].append(i)
        print(hash)
        values = hash.values()
        good_count = 0
        for item_list in values:
            n = len(item_list)
            if n > 1:
                good_count += int(n * (n - 1) / 2)
        total = len(nums)
        return int(total * (total - 1) / 2) - good_count