/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let count=0
    for(var i=0; i<nums.length; i++){
        if(nums[i]%3 !=0){
            count++
        }
    }
    return count
};