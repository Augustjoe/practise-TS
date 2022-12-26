(function(){
    /* 
        泛型
        为了在不知道传入值时，失去类型校验
        第一个T会根据调用时传入的值的类型，自动获取，或在调用时进行定义
    */
    function fn<T>(val:T):T{
           return val 
    }
    let res1 = fn(10) //这里T的类型是，number
    let res2 = fn<string>("fn")// 这里T的类型是 string
    console.log(res1,res2)

    // 有多个参数时，可以定义多个泛型
    function fn2<T,A>(a:T,b:A){
        return a
    }
    console.log(fn2<string,number>("fn2",10))

    // 泛型可以接受接口和类
    interface inter{
        length:number
    }
    // 泛型T必须是inter的实现类或者子类
    function fn3<T extends inter>(a:T){
        return a
    }
    console.log(fn3("123"))
    // 类中使用泛型
    class  myClass<T>{
        constructor(public name:T){}
    }
    console.log(new myClass<string>("孙悟空"))
})()