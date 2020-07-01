// 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
let isPalindrome = function (x) {
    let str = x.toString()
    let result = ''
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i]
    }
    result = parseInt(result)
    return x === result
}