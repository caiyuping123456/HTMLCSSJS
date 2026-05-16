/**
 * 允许开始设置默认值
 */
//赋值
//有默认值的参数都是在后面，(行业默认)
function add(a,b,c=10) {
    return a+b+c
}

let result1 = add(1,2,3)
console.log(result1)

let result2 = add(1,2)
console.log(result2)


//2. 同解构进行结合
let sql = {
    // url:'192.168.0.0',
    user:'root',
    password:'123234',
    port:'3306'
}
//进行初始值
function conn({url='127.0.0.1',user,password,port}){
    console.log(url)
    console.log(user)
    console.log(password)
    console.log(port)
}
conn(sql)
