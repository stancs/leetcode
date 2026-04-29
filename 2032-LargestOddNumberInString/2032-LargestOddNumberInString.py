# Last updated: 4/29/2026, 10:22:18 AM
class Solution:
    def largestOddNumber(self, num: str) -> str:
        idx = None
        for i in range(len(num) - 1, -1, -1):
            if int(num[i]) % 2 == 1:
                idx = i
                break
        
        if idx == None:
            return ''
        else:
            return num[0:idx+1]