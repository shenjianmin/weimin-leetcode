// 深度优先搜索（回溯）DFS
// 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
let restoreIpAddresses = function (s, stacks = [], result = []) {
    if (s.length > 12) {
        return []
    }
    if (stacks.length == 3) {
        if (s < 256) {
            if (isIpPart(s)) {
                stacks.push(s)
                let ip = stacks.join('.')
                result.push(ip)
                stacks.pop()
                return
            } else {
                return
            }
        } else {
            return
        }
    }
    for (var i = 1; i <= 3; i++) {
        let part = s.substr(0, i)
        if (part == '') {
            break
        } else if (isIpPart(part)) {
            stacks.push(part)
            restoreIpAddresses(s.substr(i), stacks, result)
        } else {
            break
        }
        stacks.pop()
    }
    return result
}
function isIpPart(s) {
    if (s === '') {
        return false
    }
    if (s === '0') {
        return true
    }
    if (s[0] === '0' && s.length > 1) {
        return false
    }
    return s < 256
}