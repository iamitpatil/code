class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        total = 0
        heap = []
        worker.sort()
        j = len(worker) - 1
        for i in range(0, len(difficulty)):
            heapq.heappush(heap, (-profit[i], difficulty[i]))
        while j >= 0:
            if len(heap) == 0: return total
            (p, d) = heapq.heappop(heap)
            while j >= 0 and worker[j] >= d:
                total = total+(-1*p)
                j = j-1
        return total
            