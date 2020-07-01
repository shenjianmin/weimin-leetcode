// TinyURL是一种URL简化服务， 
// 比如：当你输入一个URL https://leetcode.com/problems/design-tinyurl 时，
// 它将返回一个简化的URL http://tinyurl.com/4e9iAk.
let hash = new Map()
let i = 0
let encode = function (longUrl) {
    hash.set(i, longUrl)
    return 'http://tinyurl.com/' + i++
}
let decode = function (shortUrl) {
    let url = parseInt(shortUrl.replace("http://tinyurl.com/", ''))
    return hash.get(url)
}