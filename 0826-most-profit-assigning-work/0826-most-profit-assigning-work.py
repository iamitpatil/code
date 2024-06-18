class Solution:
    def maxProfitAssignment(self, difficulty: List[int], profit: List[int], worker: List[int]) -> int:
        total = 0
        heap = []
        worker.sort()
        j = len(worker) - 1
        for i in range(0, len(difficulty)):
            heapq.heappush(heap, (-profit[i], difficulty[i]))
        print(heap)
        while j >= 0:
            if len(heap) == 0: return total
            (p, d) = heapq.heappop(heap)
            while j >= 0 and worker[j] >= d:
                total = total+(-1*p)
                j = j-1
        return total
#         for i in range(0, len(difficulty)):
#             for j in range(0, len(worker)):
#                 if worker[j] >= difficulty[i] and profit[i] > max_profit[j]:
#                     max_profit[j] = profit[i]
#         return sum(max_profit)
            
            