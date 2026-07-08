class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        let exists = new Set();
        let duplicateExists = false;

        nums.forEach((num) => {
            if(exists.has(num)){
                duplicateExists = true
            }else{
                exists.add(num)
            }
        })

        return duplicateExists
    }
}
