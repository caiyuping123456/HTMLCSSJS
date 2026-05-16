/**
 * ``就是一个模板字符串
 * 里面可以放置换行符号
 */

//1. 声明
let name = `我是一个模板字符串`
console.log(name)

//2. 内容中直接可以出现换行符号
let html = `<h1>
                        哈哈哈哈
                   </h1>`
console.log(html)

//3. 直接进行变量的拼接,要使用${}
let lovest = '林处于'
let out = `${lovest}是我对象`
console.log(out)
