# Last updated: 4/29/2026, 10:26:06 AM
class Solution:
    def earliestAcq(self, logs: List[List[int]], n: int) -> int:
        def update_parents(arr, f1, f2):
            parent = min(arr[f1], arr[f2])
            another = max(arr[f1], arr[f2])
            for idx, item in enumerate(arr):
                if item == another:
                    arr[idx] = parent
        
        def check_parents(arr): 
            init = None
            for i in range(len(arr)):
                if i != 0 and arr[i-1] != arr[i]:
                    return False
            return True
                
        parents = list(range(n))
        print(parents)
        logs.sort(key=lambda x:x[0])
        for ts, f1, f2 in logs:
            print(ts, f1, f2)
            update_parents(parents, f1, f2)
            if check_parents(parents):
                return ts
            print(parents)
        return -1