# Last updated: 4/29/2026, 10:31:17 AM
class Solution:
    def maxSubArrayLen(self, nums: List[int], k: int) -> int:
        sum = 0
        sums = []
        for num in nums:
            sum += num
            sums.append(sum)
        print(sums)
        from collections import defaultdict
        dict = defaultdict(list)
        for i, val in enumerate(sums):
            dict[val].append(i)
        print(dict)
        max_len = None
        if dict[k]:
            i = dict[k][-1]
            max_len = i + 1
        for i, val in enumerate(sums):
            find_val = val + k
            if dict[find_val]:
                idx_list = dict[find_val]
                if idx_list:
                    right = idx_list[-1]
                    if i < right:
                        if max_len == None:
                            max_len = right - i
                        else:
                            max_len = max(max_len, right - i)
        if max_len == None:
            return 0
        else:
            return max_len
    
    def maxSubArrayLen(self, nums: List[int], k: int) -> int:
        from collections import defaultdict
        dict = defaultdict(lambda: None)
        max_len = 0
        prefix_sum = 0
        for i, num in enumerate(nums):
            prefix_sum += num
            if prefix_sum == k:
                max_len = max(max_len, i + 1)
            if prefix_sum - k in dict:
                max_len = max(max_len, i - dict[prefix_sum - k])
            if dict[prefix_sum] == None:
                dict[prefix_sum] = i
        return max_len
            