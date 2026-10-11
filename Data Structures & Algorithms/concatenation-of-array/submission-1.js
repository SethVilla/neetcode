class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const length = nums.length

        const ans = []

        for (let i = 0; i < 2; i++) {
            for (let j = 0; j < length; j++) {
                ans.push(nums[j])
            }
        }

        return ans
    }
}
