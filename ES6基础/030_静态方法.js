/**
 * 这个是一个静态方法
 *
 */
//这个是一个ES5的静态变量
function Phone(){

}
Phone.prototype.name = "Iphone"
Phone.call = function (){
    console.log("我是静态方法")
}

let iphone = new Phone()
console.log(iphone.name)
console.log(iphone)
console.log(Phone.prototype.name)
let method = Phone.call
method()


//这个是ES6的写法
class Person{
    //静态属性
    static name = '小明'
    static call (){
        console.log("我是静态方法")
    }
}

let xiaoming = new Person()

console.log(xiaoming.name)
console.log(Person.name)

//这个表明，对于静态属性或者方法来说，对象是不能进行访问的，智能通过类名进行访问