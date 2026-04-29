# Last updated: 4/29/2026, 10:22:53 AM
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        n = len(code)
        
        def next(i, k):
            if k > 0:
                return (i+1)%n
            return (i-1+n)%n
        
        ret = []
        for i in range(n):
            sum = 0
            curr = i
            for j in range(abs(k)):
                curr = next(curr, k)
                sum += code[curr]
            ret.append(sum)
        
        return ret