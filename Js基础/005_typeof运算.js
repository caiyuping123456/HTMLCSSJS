
//typeof就是判断这个是什么类型的

let name = "小明"
let age = 123
let sex = true

let user = {
    name,
    age,
    sex
}

console.log(typeof name) // string
console.log(typeof age) // number
console.log(typeof sex) //boolean

console.log(typeof user) // object

console.log(typeof null) // object 表示对象为空
console.log(typeof undefined) //null 表示数值为空