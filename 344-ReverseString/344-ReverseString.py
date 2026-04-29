# Last updated: 4/29/2026, 10:30:59 AM
class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """
        l = len(s)
        mid = l // 2
        for i in range(mid):
            s[i], s[l-i-1] = s[l-i-1], s[i]
        
        