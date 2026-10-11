class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()

        for (let index = 0; index < nums.length; index++) {
            const complement = target - nums[index]
            if (seen.has(complement)) {
                return [seen.get(complement), index]
            }
            seen.set(nums[index], index)
        }
    }
}
