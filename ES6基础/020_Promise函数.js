/**
 *
 */

//实例化Promise对象
//如果调用resolve，表示p的状态是成功，
//如果调用reject,表示p的状态表示失败
//这个就是异步任务
let p = new Promise(function (resolve,reject){
    setTimeout(function() {
        let data = "成功了"
        let error = "失败了"
        console.log("调用异步方法")
        //这里调用成功
        // resolve(data)

        //这里调用失败
        reject(error)
    },1000)
})

//第一个function表示成功的时候调用
//第二个function表示失败的时候调用
p.then(function(value){
    console.log(value)
},function (reason){
    console.log(reason)
})