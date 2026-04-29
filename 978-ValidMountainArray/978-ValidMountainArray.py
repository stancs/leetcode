# Last updated: 4/29/2026, 10:26:44 AM
class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        state = 0
        n = len(arr)
        for i in range(1, n):
            prev = arr[i-1]
            curr = arr[i]
            diff = curr - prev
            if state == 0:
                if diff > 0:
                    state = 1
                else: 
                    return False
            if state == 1:
                if diff < 0:
                    state = 2
                elif diff == 0:
                    return False
            if state == 2:
                if diff >= 0:
                    return False
        return state == 2
            
            