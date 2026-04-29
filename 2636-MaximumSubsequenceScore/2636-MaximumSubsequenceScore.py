# Last updated: 4/29/2026, 10:19:54 AM
class Solution:
    def maxScore(self, nums1: List[int], nums2: List[int], k: int) -> int:
        # Pair nums1 and nums2 together and sort by nums2 in descending order
        pairs = list(zip(nums1, nums2))
        pairs.sort(key=lambda x: -x[1])

        # Min-heap to maintain the top k elements of nums1
        min_heap = []
        sum_nums1 = 0
        max_score = 0

        for num1, num2 in pairs:
            heapq.heappush(min_heap, num1)
            sum_nums1 += num1

            if len(min_heap) > k:
                sum_nums1 -= heapq.heappop(min_heap)

            if len(min_heap) == k:
                max_score = max(max_score, sum_nums1 * num2)

        return max_score