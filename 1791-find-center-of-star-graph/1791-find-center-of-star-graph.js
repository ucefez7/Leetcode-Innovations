/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let [[a,b],[c,d]]= edges
    if(a==c || b==c){
        return c
    }else{
        return d
    }
};