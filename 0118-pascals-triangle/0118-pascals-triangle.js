/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let arr=[[1]]
    for(var i=1; i<numRows; i++){
        let subArr=[1]
        for(var j=1; j<i; j++){
            subArr.push(arr[i-1][j] + arr[i-1][j-1])
        }
        subArr.push(1)
        arr.push(subArr)
    }
    console.log(arr)
    return arr
};