/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function(nums) {
    let arr=nums.join('').split('')
    let sum=0,mul=0,a=0;
    for(var i=0; i<arr.length; i++){
        a=parseInt(arr[i])
        sum+= a
    }

    for(var i=0; i<nums.length; i++){
        mul+= nums[i]
    }
    return mul-sum
};