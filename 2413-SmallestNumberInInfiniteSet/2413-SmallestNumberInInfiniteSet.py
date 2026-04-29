# Last updated: 4/29/2026, 10:20:42 AM
class SmallestInfiniteSet:
    def __init__(self):
        self.curr = 1
        self.addedBack = []
        heapq.heapify(self.addedBack)

    def popSmallest(self) -> int:
        if self.addedBack and self.addedBack[0] < self.curr:
            return heapq.heappop(self.addedBack)
        else:
            self.curr += 1
            return self.curr - 1


    def addBack(self, num: int) -> None:
        if num < self.curr and num not in self.addedBack:
            heapq.heappush(self.addedBack, num)

        


# Your SmallestInfiniteSet object will be instantiated and called as such:
# obj = SmallestInfiniteSet()
# param_1 = obj.popSmallest()
# obj.addBack(num)