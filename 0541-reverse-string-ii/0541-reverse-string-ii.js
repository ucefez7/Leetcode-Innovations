/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let arr=s.split('')

    for(i=0; i<arr.length; i= i+k*2){
        let left=i
        let right= Math.min(i+k-1,arr.length-1)

        while(left<right){
            [arr[left],arr[right]]= [arr[right],arr[left]]
            left++
            right--
        }
    }
    return arr.join('')
};