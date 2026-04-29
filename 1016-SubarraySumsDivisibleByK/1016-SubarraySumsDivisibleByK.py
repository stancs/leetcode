# Last updated: 4/29/2026, 10:26:26 AM
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        sum = 0
        sums = []
        nums2 = list(map(lambda x:x % k, nums))
        print(nums2)
        hash = {0: [-1]}
        for i in range(len(nums2)):
            num = nums2[i]
            sum = (sum + num) % k
            if hash.get(sum) == None:
                hash[sum] = [i]
            else:
                hash[sum].append(i)
            sums.append(sum)
        print(sums)
        print(hash)
        count = 0
        for items in hash.values():
            l = len(items)
            if l > 1:
                count += int(l * (l-1) / 2)
        return count