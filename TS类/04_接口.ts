(function () {
    type Type1 = {
        name: String,
        age: Number
    }

    /* 
        接口用来定义一个类结构，用来定义一个类中应该包含哪些属性
        可以在定义类时显示类的结构
        接口定义时只定义接口的结构不考虑实际值，接口中的所有方法都是抽象方法
    */
    interface Type2 {
        name: String,
        age: Number,
        brack:Function,
        sayHello():void
    }
    //    两个相同的接口不会覆盖会合并
    interface Type2 {
        gender: String;
    }

    const Obj: Type2 = {
        name: "张三",
        age: 18,
        gender: '男',
        brack:function(){},
        sayHello:()=>{}
    }

    class myClass implements Type2 {
        name :String
        age :Number
        gender :String
        constructor(name:String,age:Number,gender:String){
            this.name = name;
            this.age = age;
            this.gender = gender
        }
        brack(){
            
        }
        sayHello(): void {
            
        }
    }





})()