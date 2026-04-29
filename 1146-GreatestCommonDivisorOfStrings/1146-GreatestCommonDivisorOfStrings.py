# Last updated: 4/29/2026, 10:25:45 AM
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        arr = []
        for i in range(min(len(str1), len(str2))):
            if str1[i] == str2[i]:
                arr.append(str1[i])
            else:
                break;
        
        print(arr)
        s = "".join(arr)
        len1 = len(str1)
        len2 = len(str2)
        
        while len(s) >= 1:    
            print(s)
            len_c = len(s)
            p = len1 // len_c
            q = len2 // len_c
            if s * p == str1 and s * q == str2:
                return s
            else:
                s = s[0:len(s)-1]
        return ""