/**
 *
 *
 * 节流的意思就是：
 * 所以对于搜索来说使用节流比较好
 *
 *
 */

let a = function (fn,time){
    let timeId = true;
    return function(){
        if(!timeId){
            return false;
        }
        timeId = false;
        setTimeout(function() {
            fn()
            timeId = true
        },time)
    }
}

let b = function (){
    console.log("我是防抖代码")
}
