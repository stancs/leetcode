# Last updated: 4/29/2026, 10:31:11 AM
class Solution:
    def countBits(self, n: int) -> List[int]:
        res = []
        def count(i):
            count = 0
            num = i
            while(num > 0):
                remainder = num % 2
                if remainder == 1:
                    count += 1
                num = (num - remainder) / 2
            return count
        for i in range(0, n+1):
            res.append(count(i))
        
        return res