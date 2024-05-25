class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        cache = {}
        def dfs(x, y):
            if (x, y) in cache:
                return cache[(x, y)]
            if x >= len(s) and y >= len(p):
                cache[(x, y)] = True
                return True
            elif y >= len(p):
                cache[(x, y)] = False
                return False
            match = x < len(s) and (s[x] == p[y] or p[y] == ".")
            if y+1 < len(p) and p[y+1] == "*":
                cache[(x, y)] = dfs(x, y+2) or (match and dfs(x+1, y))
                return cache[(x, y)]
            if match:
                cache[(x, y)] = dfs(x+1, y+1)
                return cache[(x, y)]
            cache[(x, y)] = False
            return cache[(x, y)]
        return dfs(0, 0)