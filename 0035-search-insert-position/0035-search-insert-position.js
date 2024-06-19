/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let start=0
    let end= nums.length-1
    while(start<=end){
        let middleman= Math.floor((start+end)/2)
        if(nums[middleman]==target){
            return middleman
        }else if(nums[middleman]<target){
            start= middleman+1
        }else{
            end= middleman-1
        }
    }
    return start
};