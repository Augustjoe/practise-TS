(function (){
 class Person5 {
     /* 
     在ts种可以设置特有的属性修饰符
     public 表示该属性是公共的，是可以被访问和修改的
     private 表示该属性为私有属性，不可被类的外包访问和更改
            - 但在类的内部可以访问，可以设置几个方法，通关这几个方法在类的内部进行访问
     protected 受保护的属性 只能在自身类里和子类中才可以访问
     */
     private name:string;
     private age:number;
     constructor(name:string,age:number){
        this.name = name;
        this.age = age;
     }
     /* 
        这种get set称为属性的存取器
     */
    //  getName(){
    //      return this.name;
    //  }
    // //  有set后可以进行各种的逻辑操作，比如对传入的值进行校验
    //  setName(name:string){
    //      this.name = name
    //  }
    //  setAge(val:number){
    //     //  设置校验小于1不允许存入
    //      if(val<1){
    //          this.age = val
    //      }
    //  }

    /* 
      有更方便的写法，可以直接通关.来获取值
    */
//    可通关直接.的方式调用到此方法,名称不能跟其他属性重名
   get _name(){
    return this.name
   }
   set _name(val:string){
       this.name = val
   }
   set _age(val:number){
    if(val>1){
        this.age = val
    }   
   }
 }
 const per5 = new Person5("孙悟空", 18)
//  per5.setName("猪八戒")
//  per5.setAge(2)
//  console.log(per5.getName(),"getName")
 //  现在属性中的值可被任意的修改，这钟情况是非常不安全的
//  per5.name = "猪八戒"
 console.log(per5._name)
 per5._age = 19 
 console.log(per5)


//  便捷语法糖
 class c {
    //  自动公开name 和 age属性 
     constructor(public name:String,public age:number){}
 }
})()