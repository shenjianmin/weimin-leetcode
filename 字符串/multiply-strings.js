// 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
let multiply = function (num1, num2) {
    let m = num1.split('')
    let n = num2.split('')
    let l1 = m.length
    let l2 = n.length
    let l = l1 + l2
    let result = []
    for (let i = 0; i < l; i++) {
        result[i] = 0
    }
    for (let j = 0; j < l2; j++) {
        let a = l2 - j - 1
        for (let x = 1; x <= l1; x++) {
            let e = l - x
            let b = l1 - x
            let s = m[b] * n[a] + result[e - j]
            let c = s % 10
            let d = parseInt(s / 10)
            result[e - j] = c
            result[e - j - 1] = d + result[e - j - 1]
        }
    }
    while (result[0] == 0) {
        result.splice(0, 1)
        if (result.length == 1 && result[0] == 0) {
            return '0'
        }
    }
    result = result.join('')
    return result
}