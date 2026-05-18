/**
 * class和java的class差不多
 * class 这个是一个对象的语法糖
 *
 */
// 创建class对象
//原生的对象进行创建
function Phone(brand,price) {
    this.brand = brand;
    this.price = price;
}
//添加函数
Phone.prototype.call = function (){
    console.log("这个是一个函数")
}

//实例化对象
let Huawei = new Phone("huawei",8000)
console.log(Huawei.brand)
Huawei.call()


//使用class定义类
class Person{
    //这个是构造方法，不能修改
    constructor(name ,age) {
        this.name = name;
        this.age = age;
    }

    //方法使用这个语法，必须
    call(){
        console.log("打掉话")
    }
}

//使用
let xiaoming = new Person("xiaoming",13)
console.log(xiaoming);

xiaoming.call()