/**
 * 生成器是用于一步方法调用
 */
//1. 定义生成器
function * add (){
    console.log("1")
    yield "你好"
    console.log("2")
    yield "好久不见"
    console.log("3")
    yield "过的还好吗"
    console.log("4")
    yield "哈哈哈哈"
    console.log("5")
    yield "呵呵呵呵"
    console.log("6")
    yield "一一一"
}

//2. 使用生成器
let itearter = add()
let result1 = itearter.next()
console.log(result1.value)
let result2 = itearter.next()
console.log(result2)
let result3 = itearter.next()
console.log(result3)
let result4 = itearter.next()
console.log(result4)

/**
 * 可以看出，yield就是一个一步回调
 */

//下面做一个小案例
// // 1秒输出1，2秒输出2，3秒输出3
// function out1(){
//     setTimeout(()=>{
//         console.log("我是一秒，输出1")
//     },1000)
// }
// function out2(){
//     setTimeout(()=>{
//         console.log("我是2秒，输出2")
//     },2000)
// }
//
// function out3(){
//     setTimeout(()=>{
//         console.log("我是3秒，输出3")
//     },3000)
// }
//
// //使用生成器函数进行调用
// //这个是一个一步方法·
// function * fn(){
//     yield out1()
//     yield out2()
//     yield out3()
// }
//
// let cnt = 0
// let it = fn()
// while(cnt<3){
//     cnt++;
//     it.next()
// }

//注意这个是一个一步方法调用


//这就是一个依次输出
//下面做一个小案例
// 1秒输出1，2秒输出2，3秒输出3
function out1(){
    setTimeout(()=>{
        console.log("hahhahha我是一秒，输出1")
        it.next()
    },1000)
}
function out2(){
    setTimeout(()=>{
        console.log("hahahhaha我是2秒，输出2")
        it.next()
    },2000)
}

function out3(){
    setTimeout(()=>{
        console.log("hahahhahah我是3秒，输出3")
    },3000)
}

//使用生成器函数进行调用
//这个是一个一步方法·
function * fn(){
    yield out1()
    yield out2()
    yield out3()
}


let it = fn()
it.next()


