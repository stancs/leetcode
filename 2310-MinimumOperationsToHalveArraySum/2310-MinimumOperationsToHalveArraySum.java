// Last updated: 4/29/2026, 10:21:08 AM
class Solution {
    public int halveArray(int[] nums) {
        PriorityQueue<Double> heap = new PriorityQueue<>(Comparator.reverseOrder());
        double sum = 0.0;
        for(int num: nums) {
            heap.add(num * 1.0);
            sum += num;
        }
        double halfSum = sum / 2.0;
        int steps = 0;
        while(sum > halfSum) {
            double out = heap.remove();
            double halfOut = out / 2;
            heap.add(halfOut);
            sum -= halfOut;
            steps++;
        }
        return steps;
    }
}