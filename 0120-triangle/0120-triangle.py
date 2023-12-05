class Solution(object):
    def minimumTotal(self, triangle):
        dp = []
        minimum = sys.maxint
        for i, row in enumerate(triangle):
            dp.append([]);
            minimum = sys.maxint
            for j, item in enumerate(triangle[i]):
                if i==0 and j==0:
                    dp[i].append(item)
                else:
                    dp[i].append(
                        min(dp[i-1][j] + triangle[i][j] if j < len(triangle[i-1]) else dp[i-1][j-1] + triangle[i][j],
                            dp[i-1][j-1] + triangle[i][j] if j > 0 else dp[i-1][j] + triangle[i][j])
                    )
                minimum = min(dp[i][j], minimum)
        return minimum