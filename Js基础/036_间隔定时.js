

//区别就是setInterval会为一间隔去执行
//用法和setTimeout一样
const interval = setInterval(function (){
    console.log("我是一个定时任务")
},1000);

//这个是取消这个定时任务
clearInterval(interval)