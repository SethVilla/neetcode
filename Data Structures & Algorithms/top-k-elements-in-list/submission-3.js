class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = new Map()

        for (const num of nums) {
            count.set(num, (count.get(num) || 0) + 1)
        }

        const frequency = new Map()

        for (const [k] of count) {
            if (!frequency.get(count.get(k))) {
                frequency.set(count.get(k), [])
            }
            frequency.get(count.get(k)).push(k)
        }

        const sortedFrequency = [...frequency.keys()].sort((a,b) => b - a)

        const result = []

        for (const f of sortedFrequency) {
            for (const fs of frequency.get(f)) {
                result.push(fs)
                if (result.length === k) {
                    return result
                }
            }
        }

        return result

    }

}
