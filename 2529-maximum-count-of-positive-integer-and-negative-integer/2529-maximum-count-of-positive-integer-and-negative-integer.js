/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let pos=[]
    let neg=[]
    for(var i=0; i<nums.length; i++){
        if(nums[i]>0){
            pos.push(nums[i])
        }else{
            neg.push(nums[i])
        }
    }
    let ve=[]
    for(var i=0; i<neg.length; i++){
        if(neg[i]<0){
            ve.push(neg[i])
        }
    }
    if(pos.length>=ve.length){
        return pos.length
    }else{
        return ve.length
    }
};