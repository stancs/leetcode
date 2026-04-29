# Last updated: 4/29/2026, 10:36:26 AM
class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        def compare(i):
            for j in range(len(needle)):
                if i+j >= len(haystack):
                    return False
                if haystack[i+j] != needle[j]:
                    return False
            return True
        
        n_h = len(haystack)
        n_n = len(needle)
        for i in range(n_h):
            if compare(i):
                return i
        return -1