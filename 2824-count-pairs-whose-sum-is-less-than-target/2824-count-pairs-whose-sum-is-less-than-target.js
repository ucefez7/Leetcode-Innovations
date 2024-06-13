/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    let res=0
    for(var i=0; i<nums.length; i++){
        for(var j=i; j<nums.length; j++){
            if(nums[i] + nums[j+1] < target){
                res+=1
            }
        }
    }
    return res
};