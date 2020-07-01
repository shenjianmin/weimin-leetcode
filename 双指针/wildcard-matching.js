// 双指针
// 给定一个字符串 (s) 和一个字符模式 (p) ，实现一个支持 '?' 和 '*' 的通配符匹配。
// '?' 可以匹配任何单个字符。
// '*' 可以匹配任意字符串（包括空字符串）。
// 两个字符串完全匹配才算匹配成功。
let isMatch = function (s, p) {
    let sArr = s.split('')
    let pArr = p.split('')
    let sNum = -1
    let pNum = -1
    let sIndex = 0
    let pIndex = 0
    while (sIndex < sArr.length) {
        if (pIndex == pArr.length) {
            if (pNum == -1) {
                return false
            }
            pIndex = pNum + 1
            sIndex = ++sNum
        } else if (pArr[pIndex] == '?' || pArr[pIndex] == sArr[sIndex]) {
            pIndex++
            sIndex++
        } else if (pArr[pIndex] == '*') {
            pNum = pIndex
            sNum = sIndex
            pIndex = pNum + 1
        } else {
            if (pNum == -1) {
                return false
            }
            pIndex = pNum + 1
            sIndex = ++sNum
        }
    }
    while (pIndex < pArr.length) {
        if (pArr[pIndex] != '*') {
            break
        }
        pIndex++
    }
    return pIndex == pArr.length
}