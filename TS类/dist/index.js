"use strict";
// 使用 class关键字定义一个类
/*
    对象中包含两部分：属性，方法
*/
class Person {
    constructor() {
        /*
          定义属性,实例属性,需要通过实例才能访问，
          例如： let a = new Person() a.name
    
          readonly 只读属性，在实例中只能看不能改
        */
        this.name = "张三";
        this.age = 18;
    }
    /*
        定义方法，如果加上 static 则变成静态方法与静态属性一致
    */
    sayHello() {
        console.log("恭喜发财");
    }
    static helloWorld() {
        console.log("静态方法");
    }
}
/*
    satic 开头的是静态属性，可直接访问
    例 ： Person.gender

    readonly 也可加在static后，变成静态只读属性
*/
Person.gender = "男";
const per = new Person();
// console.log(per,Person.gender)
// per.sayHello()
// Person.helloWorld()
class Dog {
    constructor(name, age) {
        // 在构造函数中，this指向创建的实例
        console.log(this, 'constructor');
        this.name = name;
        this.age = age;
    }
    bark() {
        // 这个this指向的也是实例
        console.log(this, 'bark');
        console.log("汪汪");
    }
}
const dog = new Dog("修狗", 18);
console.log(dog);
(function () {
    /*
        abstract 表示该类为一个抽象类
          抽象类和其他类区别不大，只是不能直接new
          抽象类就是专门用来被继承的类
    */
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("叫");
        }
    }
    /*
        使用继承后，子类会拥有父类所有的方法和属性
        通过继承可以将多个类中共有的属性和方法写到一个类中
        如果希望添加一些父类中没有的方法或属性直接加就可以

        如果父类class中的方法无法满足需要，可以将其重写
    */
    class Dog extends Animal {
        constructor(name, age, type) {
            /*
                如果使用了继承，并且在子类中使用了构造函数，则必须调用构造函数super，且传入相应参数
            */
            super(name, age);
            //    this必须用在super后
            this.type = type;
        }
        run() {
            console.log("跑");
        }
        sayHello() {
            /*
                super 指向父类
            */
            super.sayHello();
            console.log("汪汪汪");
        }
        track() {
            console.log("汪");
        }
    }
    const dog = new Dog("修狗", 3, '二哈');
    dog.sayHello();
    dog.run();
})();
(function () {
    const Obj = {
        name: "张三",
        age: 18,
        gender: '男',
        brack: function () { },
        sayHello: () => { }
    };
    class myClass {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        brack() {
        }
        sayHello() {
        }
    }
})();
(function () {
    class Person5 {
        constructor(name, age) {
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
        get _name() {
            return this.name;
        }
        set _name(val) {
            this.name = val;
        }
        set _age(val) {
            if (val > 1) {
                this.age = val;
            }
        }
    }
    const per5 = new Person5("孙悟空", 18);
    //  per5.setName("猪八戒")
    //  per5.setAge(2)
    //  console.log(per5.getName(),"getName")
    //  现在属性中的值可被任意的修改，这钟情况是非常不安全的
    //  per5.name = "猪八戒"
    console.log(per5._name);
    per5._age = 19;
    console.log(per5);
    //  便捷语法糖
    class c {
        //  自动公开name 和 age属性 
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
})();
(function () {
    /*
        泛型
        为了在不知道传入值时，失去类型校验
        第一个T会根据调用时传入的值的类型，自动获取，或在调用时进行定义
    */
    function fn(val) {
        return val;
    }
    let res1 = fn(10); //这里T的类型是，number
    let res2 = fn("fn"); // 这里T的类型是 string
    console.log(res1, res2);
    // 有多个参数时，可以定义多个泛型
    function fn2(a, b) {
        return a;
    }
    console.log(fn2("fn2", 10));
    // 泛型T必须是inter的实现类或者子类
    function fn3(a) {
        return a;
    }
    console.log(fn3("123"));
    // 类中使用泛型
    class myClass {
        constructor(name) {
            this.name = name;
        }
    }
    console.log(new myClass("孙悟空"));
})();
