// 给定两个表示复数的字符串。
// 返回表示它们乘积的字符串。注意，根据定义 i2 = -1。
let complexNumberMultiply = function (a, b) {
    let aArr = a.includes("+") ? a.split("+") : a.split("-")
    let bArr = b.includes("+") ? b.split("+") : b.split("-")
    let c = aArr[0] * bArr[0] - (aArr[1].slice(0, aArr[1].length - 1)) * (bArr[1].slice(0, bArr[1].length - 1))
    let d = aArr[0] * (bArr[1].slice(0, bArr[1].length - 1)) + (aArr[1].slice(0, aArr[1].length - 1)) * bArr[0]
    return c + "+" + d + "i"
}