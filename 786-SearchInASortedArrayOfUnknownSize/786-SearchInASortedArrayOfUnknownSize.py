# Last updated: 4/29/2026, 10:27:47 AM
# """
# This is ArrayReader's API interface.
# You should not implement it, or speculate about its implementation
# """
#class ArrayReader:
#    def get(self, index: int) -> int:

class Solution:
    def search(self, reader: 'ArrayReader', target: int) -> int:
        def binarySearch(i, j):
            print("run binary search")
            left = i
            right = j
            while left <= right:
                print(f"({left}, {right})")
                mid = (left + right) // 2
                mid_val = reader.get(mid)
                print(f"mid: {mid}, val: {mid_val}")
                if mid_val == target:
                    return mid
                elif mid_val < target:
                    left = mid + 1
                else:
                    right = mid - 1
            return -1
        
        curr = 1
        prev = 0
        res = reader.get(curr)
        while res != 2**31 - 1:
            print(f"prev: {prev}, curr: {curr}, res: {res}")
            if res == target:
                return curr
            elif res > target:
                break;
            prev = curr
            curr *= 2
            res = reader.get(curr)
        
        return binarySearch(prev, curr);
        print(prev, curr)
            