class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (s.length < t.length) return ""

        let window = {}
        let countT = {}

        for (const c of t) {
            countT[c] = 1 + (countT[c] || 0)
        }

        let have = 0
        const need = Object.keys(countT).length

        let res = [-1,-1]
        let resLength = Infinity

        let l = 0

        for (let r = 0, n = s.length; r < n; r++) {

            const char = s[r]
            window[char] = 1 + (window[char] || 0)

            if (char in countT && window[char] === countT[char]) {
                have++
            }

            while (have === need) {
                
                if (r - l + 1 < resLength) {
                    res = [l, r]
                    resLength = r - l + 1
                }

                window[s[l]]--
                if (s[l] in countT && window[s[l]] < countT[s[l]]) {
                    have--
                }

                l++
            }
        }

        return resLength === Infinity ? "" : s.slice(res[0], res[1] + 1)
        
    }
}
