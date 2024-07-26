/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if(nums.length<2){
        return nums
    }
    let mid= Math.floor(nums.length/2)
    let left= nums.slice(0,mid)
    let right= nums.slice(mid)
    return merge(sortArray(left),sortArray(right))
};

merge=(left,right)=>{
    arr=[]
    while(left.length && right.length){
        if(left[0]<right[0]){
            arr.push(left.shift())
        }else{
            arr.push(right.shift())
        }
    }
    return [...arr,...left,...right]
}