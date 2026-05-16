/**
 * 解构就是从数组或者对象中进行提取，对变量进行赋值的操作
 */
//1. 数组的解构
// const name = ["a",'s','as','dsqw']
// let [as,df,gh,jk] = name
// console.log(df)

//2. 对象的解构
const zhao = {
    name:"赵本山",
    age:'不限',
    xiaoping:function (){
        console.log("我可以演小品")
    }
}
//注意，解构的属性要和对象里面的一样
//同时解构对象要使用{}
//解构数组只要使用[]就可以
let {name,age,xiaoping} = zhao
console.log(name)