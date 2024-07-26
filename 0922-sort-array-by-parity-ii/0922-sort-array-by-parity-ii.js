/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function(nums) {
    let arr=[]
    let even=[]
    let odd=[]
    for(var i=0; i<nums.length; i++){
        if(nums[i]%2==0){
            even.push(nums[i])
        }else{
            odd.push(nums[i])
        }
    }
    for(var i=0; i<nums.length; i++){
        if(i%2==0){
            arr.push(even.shift())
        }else{
            arr.push(odd.shift())
        }
    }
    return arr
};