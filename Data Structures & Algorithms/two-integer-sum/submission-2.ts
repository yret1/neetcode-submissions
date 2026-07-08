class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let i = 0;
        let j = nums.length - 1;

        if(nums[i] + nums[j] == target){
            return [i,j]
        }

        while(i < nums.length){

            let other = target - nums[i];

            if(nums.indexOf(other) !== -1 && nums.indexOf(other) !== i){
                let firstIdx = i;
                let secondIdx = nums.indexOf(other);
                return firstIdx < secondIdx ? [firstIdx, secondIdx] : [secondIdx, firstIdx];
            }else{
                i++
            }
        }
        return [];
    }
}
