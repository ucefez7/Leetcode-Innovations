/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let totalAtt=0;
    let t= timeSeries;

    for(var i=0; i<t.length; i++){
        if(i==t.length-1){
            totalAtt+= duration
        }else{
            let timeDiff= t[i+1]-t[i]
            totalAtt+= Math.min(timeDiff,duration)
        }
    }
    return totalAtt
};