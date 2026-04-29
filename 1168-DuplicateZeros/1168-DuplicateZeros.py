# Last updated: 4/29/2026, 10:25:40 AM
class Solution:
    def duplicateZeros(self, arr: List[int]) -> None:
        """
        Do not return anything, modify arr in-place instead.
        """
        i = 0
        n = len(arr)
        while i < n:
            ch = arr[i]
            if ch == 0:
                arr.insert(i, 0)
                arr.pop()
                i += 1
            i += 1