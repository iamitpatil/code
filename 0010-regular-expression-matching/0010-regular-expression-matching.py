class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        j = 0
        i = 0
        def dfs(x, y):
            if x >= len(s) and y >= len(p):
                return True
            elif y >= len(p):
                return False
            match = x < len(s) and (s[x] == p[y] or p[y] == ".")
            if y+1 < len(p) and p[y+1] == "*":
                return dfs(x, y+2) or (match and dfs(x+1, y))
            if match:
                return dfs(x+1, y+1)
            return False
        return dfs(0, 0)