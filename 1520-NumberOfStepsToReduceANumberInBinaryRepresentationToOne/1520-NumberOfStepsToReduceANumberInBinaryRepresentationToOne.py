# Last updated: 4/29/2026, 10:23:56 AM
class Solution:
    def numSteps(self, s: str) -> int:
        reverse = s[::-1]
        num = 0
        for i in range(0, len(reverse)):
            num += int(reverse[i]) * 2 ** i
        print(num)
        steps = 0
        while num > 1:
            if num % 2 == 0:
                num /= 2
            else:
                num += 1
            steps += 1
        return steps
    def numSteps(self, s: str) -> int:
        curr = str(s)
        def is_even(s):
            return s[-1] == '0'
        def add_one(s):
            rev = list(s[::-1])
            isUsedOne = False
            for i in range(len(rev)):
                if rev[i] == "1":
                    rev[i] = "0"
                else:
                    rev[i] = "1"
                    isUsedOne = True
                    break;
            if not isUsedOne:
                rev.append("1")
            return ''.join(rev)[::-1]
            
        steps = 0
        while len(curr) > 1:
            if is_even(curr):
                curr = curr[0:-1]
            else:
                curr = add_one(curr)
            steps += 1
            print(curr)
            print(f"steps: {steps}")
        return steps