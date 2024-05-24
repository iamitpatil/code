class Solution:
    def findCheapestPrice(self, n: int, flights: List[List[int]], src: int, dst: int, k: int) -> int:
        prices = [sys.maxsize for v in range(0, n)]
        prices[src] = 0
        temp = []
        temp.extend(prices)
        for i in range(0, k+1):
            for f in flights:
                temp[f[1]] = min(prices[f[0]]+f[2], prices[f[1]], temp[f[1]])
            prices = []
            prices.extend(temp)
        return -1 if prices[dst] == sys.maxsize else prices[dst]