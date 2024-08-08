/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    for(var i=0; i<image.length; i++){
        for(var j=0; j<image[i].length; j++){
            if(image[i][j]==1){
                image[i][j]=0
            }else{
                image[i][j]=1
            }
        }
    }
    for(var i=0; i<image.length; i++){
        image[i].reverse()
    }
    return image
};