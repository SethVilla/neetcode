class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rMax = -1

        for (let i = arr.length - 1; i >= 0; i--) {
            let nMax = Math.max(arr[i], rMax)
            arr[i] = rMax
            rMax = nMax
        }

        return arr
    }
}
