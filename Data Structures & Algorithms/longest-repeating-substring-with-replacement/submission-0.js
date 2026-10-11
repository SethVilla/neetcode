class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        const count = {}
        let res = 0
        let l = 0
        let maxF = 0

        for (const r in s) {
            count[s[r]] = (count[s[r]] || 0) + 1
            maxF = Math.max(maxF, ...Object.values(count))

            while ((r - l + 1) - maxF > k) {
                count[s[l]] -= 1
                l += 1
            }
            res = Math.max(res, r - l + 1)
        }
        return res
    }
}
