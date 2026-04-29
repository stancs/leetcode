# Last updated: 4/29/2026, 10:21:59 AM
class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        l = len(nums[0])
        map = dict.fromkeys(nums, True)
        print(map)
        def permutation(curr, max_len):
            if len(curr) == max_len:
                if map.get(curr) == None:
                    return curr
                else:
                    return False
            return permutation(curr + "0", max_len) or permutation(curr + "1", max_len)
        return permutation('', l)