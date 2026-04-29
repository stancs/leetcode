# Last updated: 4/29/2026, 10:29:02 AM
class Solution:
    def replaceWords(self, dictionary: List[str], sentence: str) -> str:
        arr = sentence.split(" ")
        print(arr)
        res = []
        for word in arr:
            replace_word = ''
            for dict_word in dictionary:
                if word.startswith(dict_word):
                    if len(replace_word) == 0 or len(dict_word) < len(replace_word):
                        replace_word = dict_word
            if len(replace_word) != 0:
                res.append(replace_word)
            else:
                res.append(word)
        print(res)
        return " ".join(res)