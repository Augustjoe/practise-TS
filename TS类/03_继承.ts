(function(){
    /* 
        abstract 表示该类为一个抽象类
          抽象类和其他类区别不大，只是不能直接new
          抽象类就是专门用来被继承的类
    */
     abstract class Animal{
        name :string;
        age:number;
        constructor(name:string,age:number){
            this.name = name;
            this.age = age;
        }

        sayHello(){
            console.log("叫")
        }
        /* 
            定义一个抽象方法，使用abstract开头，没有方法体；
            抽象方法中只能定义在抽象类中，子类必须对抽象方法进行重写
        */
        abstract track():void;
    }
    /* 
        使用继承后，子类会拥有父类所有的方法和属性
        通过继承可以将多个类中共有的属性和方法写到一个类中
        如果希望添加一些父类中没有的方法或属性直接加就可以

        如果父类class中的方法无法满足需要，可以将其重写
    */
    class Dog extends Animal{
        type:String;
        constructor(name:string,age:number,type:String){
            /* 
                如果使用了继承，并且在子类中使用了构造函数，则必须调用构造函数super，且传入相应参数
            */
           super(name,age)
        //    this必须用在super后
           this.type = type;
        }

        run(){
            console.log("跑")
        }
        sayHello(){
            /* 
                super 指向父类
            */
            super.sayHello()
            console.log("汪汪汪")
        }
        track(){
            console.log("汪")
        }
    }

    const dog = new Dog("修狗",3,'二哈')
    dog.sayHello()
    dog.run()

})()