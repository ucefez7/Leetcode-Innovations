/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function(arr1, arr2) {
    arr1.sort((a,b)=>{
        let indexA= arr2.indexOf(a)
        let indexB= arr2.indexOf(b)

        if(indexA != -1 && indexB != -1){
            return indexA- indexB
        }
        if(indexA != -1){
            return -1
        }
        if(indexB != -1){
            return 1
        }
        return a-b
    })
    return arr1
};