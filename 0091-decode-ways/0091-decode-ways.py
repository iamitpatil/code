class Solution:
    def numDecodings(self, array: str) -> int:
        idx = len(array)-1
        dp = [0]*(len(array)+1)
        dp[len(array)] = 1
        while(idx >= 0):
            if array[idx] == '0':
                dp[idx] = 0
            else :
                dp[idx] = dp[idx+1]
                if (idx+1 < len(array)) and ((array[idx] == '1') or (array[idx] == '2' and array[idx+1] >= '0' and array[idx+1] <= '6')) :
                    dp[idx] += dp[idx+2]
            idx = idx-1
        return dp[0]

        