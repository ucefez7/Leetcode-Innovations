/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let pm=0

    for(var i=0; i<grid.length; i++){
        for(var j=0; j<grid[0].length; j++){
            if(grid[i][j]==1){
                pm= pm+4
                if(i>0 && grid[i-1][j]==1){
                    pm= pm-1
                }
                if(j>0 && grid[i][j-1]==1){
                    pm=pm-1
                }
                if(i<grid.length-1 && grid[i+1][j]==1){
                    pm=pm-1
                }
                if(j<grid[0].length-1 && grid[i][j+1]==1){
                    pm=pm-1
                }
            }
        }
    }
    return pm
};