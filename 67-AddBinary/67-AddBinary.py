# Last updated: 4/29/2026, 10:35:27 AM
class Solution:
    def addBinary(self, a: str, b: str) -> str:
        a2 = list(a)
        b2 = list(b)
        a2.reverse()
        b2.reverse()
        a3 = list(map(lambda x: int(x), a2))
        b3 = list(map(lambda x: int(x), b2))
        max_count = max(len(a3), len(b3))
        res = []
        carryover = 0
        for i in range(max_count):
            n1 = 0
            n2 = 0
            if i < len(a3):
                n1 = a3[i]
            if i < len(b3):
                n2 = b3[i]
            sum = n1 + n2 + carryover
            digit = sum % 2
            carryover = sum // 2
            res.append(digit)
        if carryover == 1:
            res.append(carryover)
        res.reverse()
        res2 = map(lambda num: str(num), res)
        s = "".join(res2)
        return s