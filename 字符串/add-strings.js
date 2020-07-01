// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和。
let addStrings = function (num1, num2) {
    let arr = []
    let index = 0
    let len = num1.length > num2.length ? num1.length : num2.length
    while (num1.length < len) { num1 = '0' + num1 }
    while (num2.length < len) { num2 = '0' + num2 }
    for (let i = len - 1; i >= 0; i--) {
        let sum = parseInt(num1[i]) + parseInt(num2[i]) + index
        if (sum > 9) {
            arr.unshift(sum % 10)
            index = 1
        } else {
            index = 0
            arr.unshift(sum)
        }
    }
    return index == 0 ? arr.join('') : (index + arr.join(''))
}