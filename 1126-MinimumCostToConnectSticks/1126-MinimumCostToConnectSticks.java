// Last updated: 4/29/2026, 10:25:49 AM
// 2022-11-07
// 3:59s
// O(n*log(n))
// O(n)
class Solution {
    public int connectSticks(int[] sticks) {
        PriorityQueue<Integer> heap = new PriorityQueue<>();
        
        for(int stick: sticks) {
            heap.add(stick);
        }
        
        int cost = 0;
        while(heap.size() > 1) {
            int first = heap.remove();
            int second = heap.remove();
            int newStick = first + second;
            cost += newStick;
            heap.add(newStick);
        }
        return cost;
    }
}