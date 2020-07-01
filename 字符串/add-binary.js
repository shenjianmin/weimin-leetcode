// 给定两个二进制字符串，返回他们的和（用二进制表示）。
// 输入为非空字符串且只包含数字 1 和 0。
let addBinary = function (a, b) {
    let arr1 = a.split('')
    let arr2 = b.split('')
    let len
    if (arr1.length >= arr2.length) {
        len = arr1.length
        while (arr1.length !== arr2.length) {
            arr2.unshift(0)
        }
    } else {
        len = arr2.length
        while (arr1.length !== arr2.length) {
            arr1.unshift(0)
        }
    }
    let resultArr = new Array(len)
    for (let i = len - 1; i >= 0; i--) {
        resultArr[i] = parseInt(arr1[i]) + parseInt(arr2[i]) + ((resultArr[i] === 1) ? resultArr[i] : 0)
        if (resultArr[i] >= 2) {
            resultArr[i] = resultArr[i] - 2
            i === 0 ? resultArr.unshift(1) : (resultArr[i - 1] = 1)
        }
    }
    let result = resultArr.join('')
    return result
}