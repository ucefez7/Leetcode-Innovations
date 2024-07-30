/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let asc=true;
    let des=true;
    for(var i=0; i<nums.length; i++){
        if(nums[i]<nums[i-1]){
            asc=false
        }
        if(nums[i]>nums[i-1]){
            des=false
        }
    }
    return asc || des
};