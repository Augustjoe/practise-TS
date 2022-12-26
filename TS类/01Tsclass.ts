// 使用 class关键字定义一个类
/* 
    对象中包含两部分：属性，方法
*/
class Person{
    /* 
      定义属性,实例属性,需要通过实例才能访问，
      例如： let a = new Person() a.name

      readonly 只读属性，在实例中只能看不能改
    */
    readonly name:string = "张三";
    age: number = 18;
    /* 
        satic 开头的是静态属性，可直接访问 
        例 ： Person.gender

        readonly 也可加在static后，变成静态只读属性
    */
    static gender:String = "男"

    /* 
        定义方法，如果加上 static 则变成静态方法与静态属性一致
    */
    sayHello(){
        console.log("恭喜发财")
    }
    static helloWorld(){
        console.log("静态方法")
    }

}

const per = new Person()
// console.log(per,Person.gender)
// per.sayHello()
// Person.helloWorld()