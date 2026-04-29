# Last updated: 4/29/2026, 10:20:08 AM
"""
2: 1
3: 3
4: 2
5: 5
6: 3
...
"""
class Solution:
    def numberOfCuts(self, n: int) -> int:
        if n == 1:
            return 0
        
        if n % 2 == 0:
            return n // 2
        else:
            return n
        