# Last updated: 4/29/2026, 10:20:23 AM
class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        if n % 2 == 0:
            return n
        else: 
            return n * 2