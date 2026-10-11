class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {

        if (s1.length > s2.length) return false

        const count1 = Array(26).fill(0)
        const count2 = Array(26).fill(0)

        const aCode = "a".charCodeAt(0)

        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - aCode]++ 
            count2[s2.charCodeAt(i) - aCode]++
        }

        const matches = (arr1, arr2) => {
            for (let i = 0; i < 26; i++) {
                if (arr1[i] !== arr2[i]) {
                    return false
                }
            }
                return true
        }

        if (matches(count1, count2)) return true

            // slide through s2
            for (let i = s1.length; i < s2.length; i++) {
                // include new char
                count2[s2.charCodeAt(i) - aCode]++;
                // remove leftmost char from previous window
                count2[s2.charCodeAt(i - s1.length) - aCode]--;
                if (matches(count1, count2)) return true;
    }

    return false;



        
    }
}
