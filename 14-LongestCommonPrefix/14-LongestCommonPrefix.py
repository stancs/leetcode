# Last updated: 4/29/2026, 10:36:49 AM
class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs or len(strs) == 0:
            return ""
        res = []
        len_list = list(map(lambda s:len(s), strs))
        print(len_list)
        min_len = min(len_list)
        print(min_len)
        if min_len == 0:
            return ""
        is_break = False
        idx = 0
        while not is_break and idx < min_len:
            ch = None
            for str in strs:
                if ch == None:
                    ch = str[idx]
                else:
                    if ch != str[idx]:
                        is_break = True
                        break
            if not is_break:
                res.append(ch)
                idx += 1
        print(res)
        return "".join(res)