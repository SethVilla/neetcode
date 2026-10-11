class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let left = 0;
        let longestSubstring = 0
        const unique = new Set()

        for (const char in s) {
            while (unique.has(s[char])) {
                unique.delete(s[left])
                left++
            }
            unique.add(s[char])
            longestSubstring = Math.max(longestSubstring, char - left + 1)

        }
        console.log(unique)
        return longestSubstring
    }
}
