# Last updated: 4/29/2026, 10:27:02 AM
class Solution:
    def fairCandySwap(self, aliceSizes: List[int], bobSizes: List[int]) -> List[int]:
        from collections import defaultdict
        hash = defaultdict(lambda: None)
        sum1 = 0
        sum2 = 0
        for num in aliceSizes:
            sum1 += num
        for num in bobSizes:
            sum2 += num
            hash[num] = True
        
        target = int((sum1 + sum2) / 2)
        print(f"sum1: {sum1}, sum2: {sum2}, target: {target}")
        res = []
        for num in aliceSizes:
            diff1 = target - sum1
            findNum1 = num + diff1
            if hash[findNum1]:
                diff2 = target - sum2
                findNum2 = findNum1 + diff2
                if findNum2 == num:
                    print(f"diff1: {diff1}, diff2: {diff2}, num: {num}, findNum1: {findNum1}")
                    return [num, findNum1]
                    