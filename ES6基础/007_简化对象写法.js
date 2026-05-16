/**
 * 可以直接在大括号中直接写入变量和函数，作为对象的属性和方法
 */
let name = '林处于'
let change = function() {
    console.log("你好")
}
let user = {
    name,change,
    //方法的简化(不用function方法)
    add() {
        console.log("我是一个add函数")
    }
}
//简化1
console.log(user)

