/**
 * 下面使用ES5进行构造函数进行继承
 */

//父类
function Phone(brand,price){
    this.brand = brand;
    this.price = price;
}
Phone.prototype.call = function (){
    console.log("我可以打电话")
}

//继承
function Huawei(brand,price,size,color){
    Phone.call(this,brand,price)
    this.size = size
    this.color = color
}

//设置子集构造函数的原型
Huawei.prototype = new Phone
//校正
Huawei.prototype.constructor = Huawei;

//子类的方法
Huawei.prototype.photo = function (){
    console.log("我可以拍照")
}

Huawei.prototype.game = function (){
    console.log("我可以玩游戏")
}


// 实例化
let huw = new Huawei("huawei",12344,40,'red')
console.log(huw)
huw.game()
huw.photo()

