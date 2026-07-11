class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let grouped = new Map()
       

        for(let i = 0; i < strs.length; i++){

            let toCheck = strs[i].split("").sort().join("");

            if(!grouped.has(toCheck)){
                grouped.set(toCheck, [strs[i]])
            }else{
                grouped.set(toCheck, [...grouped.get(toCheck),strs[i]])
            }
        }
        let arr = Array.from(grouped, ([key,value]) => value)
        return arr
    }

}
