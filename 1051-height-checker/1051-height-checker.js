/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let count=[]
    let expected= [...heights].sort((a,b)=>a-b)
    for(var i=0; i<heights.length; i++){
            if(heights[i] != expected[i]){
                count.push(heights[i])
        }
    }
    return count.length
};