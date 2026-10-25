class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students: number[], sandwiches: number[]): number {

        let rotation : number = 0;

        while(rotation != students.length){
            console.log(students[0]);
            console.log(sandwiches[0]);
            if(students[0] === sandwiches[0]){
                students.shift();
                sandwiches.shift();
                rotation = 0;
            }
            else {

                console.log(students);
                console.log(sandwiches);
                let temp = students.shift();
                students.push(temp);
                rotation++;
            }
        }
        return students.length;
    }
}
