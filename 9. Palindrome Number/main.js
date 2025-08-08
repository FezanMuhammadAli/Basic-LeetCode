/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = String(x);
    let z=''
    for(let i=y.length-1; i>=0;i--){
        
        
        z+=y[i]
    }
    if (z===y){
        return true
    }else{
        return false
    }
};