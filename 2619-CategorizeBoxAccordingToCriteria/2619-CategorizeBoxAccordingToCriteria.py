# Last updated: 4/29/2026, 10:20:01 AM
class Solution:
    def categorizeBox(self, length: int, width: int, height: int, mass: int) -> str:
        is_bulky = (length >= 10**4 or width >= 10**4 or height >= 10**4) or (length * width * height >= 10**9)
        is_heavy = mass >= 100
        
        if is_bulky and is_heavy:
            return "Both"
        elif is_bulky:
            return "Bulky"
        elif is_heavy:
            return "Heavy"
        else:
            return "Neither"
        