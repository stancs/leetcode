# Last updated: 4/29/2026, 10:28:12 AM
class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        # left = 0
        # right = len(letters) - 1
        # while left < right:
        #     mid = (left + right) // 2
        #     print(f"curr:\t{left}\t{mid}\t{right}")
        #     if ord(letters[mid]) == ord(target):
        #         right = mid
        #     elif ord(letters[mid]) < ord(target):
        #         left = mid
        #     else:
        #         right = mid - 1
        #     print(f"next:\t{left}\t{mid}\t{right}")
        # return letters[left]
        for i in range(len(letters)):
            if ord(letters[i]) > ord(target):
                return letters[i]
        return letters[0]
        