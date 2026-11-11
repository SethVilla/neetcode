class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let hashMap = new Map<string, string[]>();
        

        for(let i = 0; i < strs.length; i++){
            let arr = new Array<number>(26).fill(0);
            
            for(let j = 0; j < strs[i].length; j++){
                let index = strs[i].charCodeAt(j) - "a".charCodeAt(0);
                if(arr[index] == 0){
                    arr[index] = 1;
                } else {
                    arr[index] = arr[index] + 1;
                }
            }
            let key : string = "";
            for(let k = 0; k < arr.length; k++){
                key = key + arr[k] + "#";
            }
            
            if (!hashMap.has(key)){

                hashMap.set(key, [strs[i]]);
            } else {
                let ar = hashMap.get(key);
                ar.push(strs[i]);
                hashMap.set(key, ar);
            }
            
            
        }

        


        return [...hashMap.values()];

    }
}
