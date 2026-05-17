/**
 * 进行循环，集合都实现了这个方法
 */

const arr1 = ["shun","asas","qwxe","qwzdvadrdf"]
//使用for...of
for(let v of arr1){
    console.log(v)
}
//原理就是一个开头指针进行运行

//自定义遍历数据
const user = {
    name:"小明",
    stus:[
        'asasas',
        'wihduyr',
        'dhubid',
        'wuiehix',
        'djierbud'
    ],
    //这个是设置迭代器
    //1. 方法1
    // [Symbol.iterator](){
    //     let index = 0
    //     let _this = this
    //     return{
    //         next:function (){
    //             if(index<_this.stus.length){
    //                 return {value:_this.stus[index],done:false}
    //             }
    //         }
    //     }
    // }

    //2. 使用箭头函数
    [Symbol.iterator]() {
        let index = 0;
        // 在外层保存 this
        const self = this;

        return {
            next: () => {  // next 使用箭头函数
                if (index < self.stus.length) {
                    return { value: self.stus[index++], done: false };
                }
                return { done: true };
            }
        };
    }
}

//遍历这个对象
//遍历这个数组的成员
for(let v of user) {
    console.log(v)
}