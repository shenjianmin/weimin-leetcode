// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
let reverseWords = function (s) {
    let arr = s.split(' ')
    let result = arr.map(item => item.split('').reverse().join(''))
    return result.join(' ')
}