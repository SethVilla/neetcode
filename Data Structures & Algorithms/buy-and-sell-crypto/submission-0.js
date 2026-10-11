class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0 // buy
        let r = 1 // sell

        let profit = 0;

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                profit = Math.max(profit, prices[r] - prices[l])
            } else {
                l = r
            }
            r++
        }

        return profit
    }
}
