class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let n = students.length
        let q = []

        for (const s of students) {
            q.push(s)
        }

        let res = n

        for (const sandwich of sandwiches) {
            let cnt = 0

        while (cnt < n && q[0] != sandwich) {
                q.push(q.shift())
                cnt++
            }

            if (q[0] === sandwich) {
                q.shift()
                res--
            } else {
                return res
            }

        }

        return res

    }
}
