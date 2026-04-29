# Last updated: 4/29/2026, 10:25:19 AM
class Solution:
    def tribonacci(self, n: int) -> int:
        @cache
        def tribonacci(i):
            if i <= 1:
                return i
            elif i == 2:
                return 1
            return tribonacci(i-3) + tribonacci(i-2) + tribonacci(i-1)
        
        return tribonacci(n)