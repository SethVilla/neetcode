class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const count = {}
        let res = 0
        let maxCount = 0

        for (const num of nums) {

            count[num] = (count[num] || 0) + 1

            if (count[num] > maxCount) {
                res = num    
                maxCount = count[num]   
            }

        }

        return res
    }
}
