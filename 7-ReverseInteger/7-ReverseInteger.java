// Last updated: 4/29/2026, 10:36:57 AM
class Solution {
    public int reverse(int x) {
        int n = x;
        long res = 0L;
        while (n != 0) {
            res *= 10;
            res += n % 10;
            n /= 10;
        }
        if (res > Integer.MAX_VALUE || res < Integer.MIN_VALUE) {
            return 0;
        }
        return (int)res;
    }
}