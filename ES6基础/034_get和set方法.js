/**
 * 使用get和set进行封装
 */
class Person {
    get price(){
        console.log("我是get方法")
        return 123
    }
    set price(newVal){
        console.log("我啊哈哈哈")
    }
}
let xiaomo = new Person()
console.log(xiaomo.price);
xiaomo.price = 99

//也就是说，访问Person的属性金辉调用get
//修改就会调用set

