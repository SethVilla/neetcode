class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const output = [];
        const deque = [];

        let l = 0;
        let r = 0

        while (r < nums.length) {

            while (deque.length && nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop();
            }

            deque.push(r);

            if (l > deque[0]) {
                deque.shift();
            }

            if (r + 1 >= k) {
                output.push(nums[deque[0]]);
                l++;
            }

            r++;
        }

        return output;
    }
}
