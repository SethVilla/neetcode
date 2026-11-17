class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums: number[]): number[] {
        let tempArr : number[] = [0,0,0];

        for(let i = 0; i < nums.length; i++){
            tempArr[nums[i]] = tempArr[nums[i]] + 1;
            
        }
        console.log(tempArr);

        //[ 1, 2, 1 ]

        let i : number = 0;
        let j : number = 0;
        
        while(i < tempArr.length){
            if(tempArr[i] == 0){
                i++;
            } else {
                nums[j] = i;
                tempArr[i] = tempArr[i] - 1;
                j++;
            }
        }

        return nums;
    }
}
