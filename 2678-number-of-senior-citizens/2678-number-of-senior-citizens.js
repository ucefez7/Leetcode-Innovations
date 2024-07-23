/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
  let count=0;
  for(var i=0; i<details.length; i++){
    if(details[i][11].concat(details[i][12])>60){
        count ++
    }
  } 
  return count
};