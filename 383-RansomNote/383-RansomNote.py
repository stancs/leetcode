# Last updated: 4/29/2026, 10:30:46 AM
class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        hash = {}
        for ch in magazine:
            if hash.get(ch) == None:
                hash[ch] = 1
            else: 
                hash[ch] += 1
        print(hash)
        
        for ch in ransomNote:
            if hash.get(ch) != None and hash[ch] > 0:
                hash[ch] -= 1
            else:
                return False
        
        return True