/**
 * 这个是使用ES6的方法进行继承
 */
//父类
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    call(){
        console.log("我是苏爱国")
    }
}

//子类继承
//和Java差不多
class Student extends Person {
    constructor(name,age,color,size) {
        super(name,age)
        this.color = color;
        this.size = size;
    }
    photo() {
        console.log("我会拍照")
    }
    //只能全部重写
    call(){
        console.log("我会从谢")
    }
}

//实例化
const xiaoming = new Student("xiaoming",21,'red',123)
xiaoming.photo()
xiaoming.call()