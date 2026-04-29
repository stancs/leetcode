# Last updated: 4/29/2026, 10:24:07 AM
class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        n = len(arr)
        for i in range(n-1):
            for j in range(i+1, n):
                if arr[i] == 2*arr[j] or arr[j] == 2*arr[i]:
                    return True
        return False