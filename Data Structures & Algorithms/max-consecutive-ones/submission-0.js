class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let res = 0
        let count = 0

        for ( let i = 0; i < nums.length; i++) {
            if (nums[i] === 1) {
                count++
                res = Math.max(count, res)
            } else {
                count = 0
            }
        }

        return res
     }
}
