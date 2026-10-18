class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let res = students.length
        const count = new Map()

        for (const s of students) {
            count.set(s, (count.get(s) || 0) + 1)
        }

        for (const s of sandwiches) {
            if (count.get(s)) {
                res -= 1
                count.set(s, count.get(s) - 1)
            } else {
                return res
            }
        }

        return res
    }
}
