// 栈
// 实现一个基本的计算器来计算一个简单的字符串表达式的值。
// 字符串表达式可以包含左括号 ( ，右括号 )，加号 + ，减号 -，非负整数和空格  。
let calculate = function (s) {
    if (s.length == 0) {
        return 0
    }
    let stack = []
    let result = 0
    let sign = 1
    let n
    let num
    for (var i = 0; i < s.length; i++) {
        n = s[i]
        if (!isNaN(parseInt(n))) {
            num = n
            while (((i + 1) < s.length) && (!isNaN(parseInt(s[i + 1])))) {
                num = +10 * num + (+s[++i])
            }
            result += num * sign
        } else if (n == '+') {
            sign = 1
        } else if (n == '-') {
            sign = -1
        } else if (n == '(') {
            stack.push(result)
            result = 0
            stack.push(sign)
            sign = 1
        } else if (n == ')') {
            result = stack.pop() * result + stack.pop()
        }
    }
    return result
}