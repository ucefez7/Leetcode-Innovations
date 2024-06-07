/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function(dictionary, sentence) {
    let root= new Set(dictionary)
    let words= sentence.split(' ')

    let op= words.map((word)=>{
        for(var i=1; i<=word.length; i++){
            let prefix= word.substring(0,i)
            if(root.has(prefix)){
                return prefix
            }
        }
        return word
    })
    return op.join(' ')
};