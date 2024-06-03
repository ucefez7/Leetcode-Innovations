function runningSum(nums: number[]): number[] {
    for(var i=0; i<nums.length; i++){
        if(i==0){
            nums[i]=nums[i]
        }else{
            nums[i]= nums[i-1]+ nums[i]
        }
    }
    return nums
};