class Solution:
    def romanToInt(self, s: str) -> int:
        mapping = dict(I=1, V=5, X=10, L=50, C=100, D=500, M=1000)
        sum = 0
        for i in range(0, len(s)):
            if i+1 < len(s) and mapping[s[i]] < mapping[s[i+1]]:
                sum -= mapping[s[i]]
            else:
                sum += mapping[s[i]]
        return sum