class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let volume = 0

        let l = 0
        let r = heights.length - 1

        while (l < r) {
            let currentVolume = Math.min(heights[l], heights[r]) * (r - l)
            volume = Math.max(volume, currentVolume)

            if (heights[l] < heights[r]) {
                l++
            } else {
                r--
            }

        }

        return volume
    }
}
