class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const result = []

        const backtrack = (start, build, end) => {

            if (start > end) {
                return
            }

            let found = false

            for (let i = 0; i < result.length; i++) {
                if(result[i].toString() === build.toString()) {
                    found = true;
                    break
                }
            }

            if (!found) {
                result.push([...build])

            }


            const current = nums[start]
            
            build.push(current)
            
            backtrack(start + 1, build, end)
            
            build.pop()
            
            backtrack(start + 1, build, end)
        }

        backtrack(0, [], nums.length)

        return result
    }
}
