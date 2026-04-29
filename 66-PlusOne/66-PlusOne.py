# Last updated: 4/29/2026, 10:35:30 AM
class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        rev = digits.copy()
        print(rev)
        rev.reverse()
        print(rev)
        carryout = 0
        for i in range(len(rev)):
            sum = carryout + rev[i]
            if i == 0:
                sum += 1
            new_digit = sum % 10
            carryout = sum // 10
            print(f"{new_digit}\t{carryout}")
            rev[i] = new_digit
        if carryout == 1:
            rev.append(1)
        
        rev.reverse()
        return rev