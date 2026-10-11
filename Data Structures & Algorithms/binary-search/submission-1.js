class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let i = 0;
        let j = nums.length - 1
        
        while (i <= j) {
            let mid = Math.ceil((i + j) / 2)
            console.log(mid)
            
            if (nums[mid] > target) {
                j = mid - 1
            } else if (nums[mid] < target) {
                i = mid + 1
            } else {
                return mid
            }
        }

        return -1
    }
}
