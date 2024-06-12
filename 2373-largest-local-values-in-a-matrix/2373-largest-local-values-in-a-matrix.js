/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    let arr=[]
    for(var i=0; i<grid.length-2; i++){
        let subArr=[]
        for(var j=0; j<grid.length-2; j++){
            subArr.push(Math.max(
                grid[i][j],grid[i][j+1],grid[i][j+2],
                grid[i+1][j],grid[i+1][j+1],grid[i+1][j+2],
                grid[i+2][j],grid[i+2][j+1],grid[i+2][j+2]
            ))
        }
        arr.push(subArr)
    }
    return arr
};