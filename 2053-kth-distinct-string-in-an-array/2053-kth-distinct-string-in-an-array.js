/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let res=[]
    for(var i=0; i<arr.length; i++){
        if(arr.indexOf(arr[i])== arr.lastIndexOf(arr[i])){
            res.push(arr[i])
        }
    }
    return res[k-1]? res[k-1]: ""
};