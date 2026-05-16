/**
 *
 * 防抖就是执行频率太高了，就是减低频率，
 * 一般使用的场景就是使用一一个定时器
 * 对于DOM一直变化可以使用防抖
 *
 */

let a = function (fn,time){
    let timeId = null;
    return function(){
        if(timeId){
            clearTimeout(timeId)
        }
        timeId = setTimeout(fn,time)
    }
}

let b = function (){
    console.log("我是防抖代码")
}
