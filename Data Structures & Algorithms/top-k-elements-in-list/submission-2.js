class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map()
        const solution = []
        for (let i = 0; i < nums.length; i++) {
            frequency.set(nums[i], (frequency.get(nums[i]) || 0) + 1)
        }

        const total = new Map()

        for (const [f, v] of frequency) {
            if (!total.get(frequency.get(f))) {
                total.set(frequency.get(f), [])
            }
            total.get(frequency.get(f)).push(f)
        }
        const sortedF = [...total.keys()].sort((a,b) => b - a)
            for (const freq of sortedF) {
                console.log(total.get(freq))
                for (const x of total.get(freq)) {
                    solution.push(x)
                    if (solution.length === k) {
                        return solution
                    }
                }
            }

        

        return solution

    }
}
