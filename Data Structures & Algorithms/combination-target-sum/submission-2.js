class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        nums.sort((a,b) => a - b)
        const result = []

        const backtrack = (index, build, remainder) => {
            
            if (remainder === 0) {
                result.push([...build])
                return
            }

            if (remainder < 0) {
                return
            }

            for (let i = index; i < nums.length; i++) {
                const current = nums[i]

                if (current > remainder) {
                    break
                }

                build.push(current)
                backtrack(i, build, remainder - current )
                build.pop()
            }
        }

        backtrack(0, [], target)

        return result
    }
}
