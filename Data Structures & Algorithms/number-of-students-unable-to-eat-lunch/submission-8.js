class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const count = new Map()

        let res = students.length

        for (const s of students) {
            count.set(s, (count.get(s) || 0) + 1)
        }

        for (const s of sandwiches) {
            if (count.get(s)) {
                count.set(s, count.get(s) - 1)
                res--
            } else {
                return res
            }
        }

        return res
    }
}
