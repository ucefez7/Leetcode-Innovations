/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
    let res=0;
    for(var i=0; i<columnTitle.length; i++){
        res = res+ Math.pow(26, columnTitle.length-(i+1)) * (columnTitle.charCodeAt(i)-64)
    }
    return res
};