/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    let rows=[
        new Set('qwertyuiop'),
        new Set('asdfghjkl'),
        new Set('zxcvbnm')
    ]
    test=(words)=>{
    for(var row of rows){
        let lC= words.toLowerCase()
        return rows.some(row=>[...lC].every(char=>row.has(char)))
    }
    }
    return words.filter(test)
};