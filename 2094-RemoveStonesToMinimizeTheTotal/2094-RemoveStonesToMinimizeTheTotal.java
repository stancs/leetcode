// Last updated: 4/29/2026, 10:22:04 AM
class Solution {
    public int minStoneSum(int[] piles, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());
        
        int sum = 0;
        for(int pile:piles) {
            heap.add(pile);
            sum += pile;
        }
        
        
        for(int i = 0; i < k; i++) {
            int out = heap.remove();
            int floorHalfOut = out / 2;
            int in = out - floorHalfOut;
            sum -= floorHalfOut;
            heap.add(in);
        }
        return sum;
    }
}