/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let max = Math.pow(2,31)-1;
    let min = -Math.pow(2,31);
    let num = 0, digit, lastDigit = x>0 ? max%10: Math.abs(min%10);
    while(x!=0) {
        digit = x%10;
        if(
            Math.floor(max/10) < Math.abs(num) ||
           (Math.floor(max/10) == Math.abs(num) && 
            Math.abs(digit) > lastDigit)
        ) {
            console.log(Math.abs(num))
            console.log(Math.floor(max/10))
            console.log(max)
            console.log(Math.abs(digit))
            console.log(lastDigit)
            return 0;
        }
        x=x>0 ? Math.floor(x/10): Math.ceil(x/10);
        num = num*10;
        num += digit;
    }
    return num;
};