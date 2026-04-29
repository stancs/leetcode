// Last updated: 4/29/2026, 10:27:52 AM
class KthLargest {
    private int k;
    private PriorityQueue<Integer> heap;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        heap = new PriorityQueue<>();
        
        for(int num: nums) {
            heap.add(num);
        }
        
        while(heap.size() > k) {
            heap.remove();
        }
    }
    
    public int add(int val) {
        heap.add(val);
        
        if(heap.size() > k) {
            heap.remove();
        }
        
        return heap.peek();
    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */