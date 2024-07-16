/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let total=0,left=0;
    nums.forEach((x)=>{
        total= total+x
    })

    for(var i=0; i<nums.length; i++){
        if(total-left-nums[i]== left){
            return i
        }
        left= left + nums[i]
    }
    return -1
};