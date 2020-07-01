// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转
// 注意: 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。
//       请根据这个假设，如果反转后整数溢出那么就返回 0。
let reverse = function (x) {
    let str = x.toString()
    let result = ''
    let isHasMinus = false
    if (str[0] === '-') {
        str = str.substr(1)
        isHasMinus = true
    }
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i]
    }
    if (isHasMinus) {
        result = '-' + result
    }
    result = parseInt(result)
    if (result > 2 ** 31 - 1 || result < -(2 ** 31)) {
        return 0
    }
    return result
}