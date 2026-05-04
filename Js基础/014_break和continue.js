
//这个就是一个break语句
while(true){
    console.log("跳出")
    break;
}

let num = 11;
while(num>0){
    num--;
    if(num%2===0){
        continue;
    }
    console.log(num)
}