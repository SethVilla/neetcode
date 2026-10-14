class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let count = 0
        let res = 0

        for (let i = 0; i < nums.length; i++) {
            count = nums[i] === 1 ? count + 1 : 0
            res = Math.max(count, res)

        }
        return res
    }
}
