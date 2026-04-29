# Last updated: 4/29/2026, 10:32:00 AM
class Solution:
    def generatePalindromes(self, s: str) -> List[str]:
        d = {}
        for ch in s:
            if d.get(ch) == None:
                d[ch] = 1
            else:
                d[ch] += 1
        print(d)
        count = 0
        even_str = ''
        odd_str = ''
        for key, value in d.items():
            if value % 2 == 1:
                odd_str += key
                even_str += key * (value // 2)
                if count == 1:
                    return []
                else:
                    count += 1
            else:
                even_str += key * int(value / 2)
        print(f"even: {even_str}, odd: {odd_str}")
        map = {}
        def permutation(curr, remains, l):
            if len(curr) == l:
                palindrome = curr + odd_str + curr[::-1]
                map[palindrome] = True
                return
            for i in range(len(remains)):
                newCurr = curr + remains[i]
                newRemains = remains[0:i]
                if i+1 < l:
                    newRemains += remains[i+1:]
                permutation(newCurr, newRemains, l)
        permutation('', even_str, len(even_str))
        return map.keys()
                