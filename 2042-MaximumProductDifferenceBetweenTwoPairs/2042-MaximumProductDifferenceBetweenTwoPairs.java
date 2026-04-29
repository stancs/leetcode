// Last updated: 4/29/2026, 10:22:12 AM
class Solution {
    public int maxProductDifference(int[] nums) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Comparator.reverseOrder());
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for(int num:nums) {
            maxHeap.add(num);
            minHeap.add(num);
        }
        
        int max1 = maxHeap.remove();
        int max2 = maxHeap.remove();
        
        int min1 = minHeap.remove();
        int min2 = minHeap.remove();
        
        return max1 * max2 - min1 * min2;
    }
}