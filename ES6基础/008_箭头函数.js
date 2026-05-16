/**
 * 箭头函数就是一个lambda函数
 */

//声明箭头函数
let fn = (a,b)=>{
    console.log("我是一个箭头函数")
    return a+b;
}
//调用
let result = fn(12,34);
console.log(result)

//this是静态的，也就是说this始终指向函数声明时所在的作用域的this值
function getName() {
    console.log(this.name)
}
let getName2 = ()=>{
    console.log(this.name)
}
//设置windows属性
global.name = "林处于";
const user  = {
    name:"零v呼吁"
}

//调用
//直接调用：
getName();
getName2();

//call调用
getName.call(user);
getName2.call(user);

//箭头函数的this = 定义时的外层作用域的this

//2. 不可以进行构造实例对象
// let Person = (name,age) => {
//     this.name = name;
//     this.age = age;
// }
//
// let me = new Person("小明",123)
// console.log(me)

//3. 不可以在箭头函数中使用arguments变量
let method1 = () => {
    console.log(arguments)
}
method1(1,2,3,4)


//4. j箭头的一个简写
//11. 型参数只有一个，省略小括号
let add1 = (n) => {
    return n+n;
}
let add2 = n => {
    return n+n;
}
//22. 可以省略花括号，当代码体只有一个语句的时候(return要省略)
let wew = (n) => {
    return n*n;
}

let wew1 = n => n*n