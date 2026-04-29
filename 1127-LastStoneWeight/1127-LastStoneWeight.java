// Last updated: 4/29/2026, 10:25:48 AM
class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> heap = new PriorityQueue<>(Comparator.reverseOrder());
        for(int stone: stones) {
            heap.add(stone);
        }
        
        while(heap.size() > 1) {
            int first = heap.remove();
            int second = heap.remove();
            if(first != second) {
                heap.add(first - second);
            }
        }
        
        return heap.isEmpty()? 0: heap.remove();
    }
}