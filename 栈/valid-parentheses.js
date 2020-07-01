// 栈
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：
//   1.左括号必须用相同类型的右括号闭合。
//   2.左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。
let isValid = function (s) {
    let num = 0
    let stack = []
    let arr = ['(', ')', '[', ']', '{', '}']
    for (let i of s) {
        if (i === '(' || i === '[' || i === '{') {
            num++
            stack.push(i)
        } else if (i === ')' || i === ']' || i === '}') {
            num--
            if (stack[stack.length - 1] === arr[arr.indexOf(i) - 1]) {
                stack.pop()
            }
        }
    }
    if (stack.length === 0 && num === 0) {
        return true
    } else {
        return false
    }
}