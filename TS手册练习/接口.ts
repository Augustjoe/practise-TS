function interface() :void{
    //  使用接口前
    function fn(obj:{lable:string}){
        console.log(obj.lable)
    }
    // fn({lable:"lable",number:1}) //对象字面量只能指定已知属性，并且“number”不在类型“{ lable: string; }”中
    fn({lable:"lable"}) 
    // 使用接口后
    /* 
        接口就是一个规定类型的对象
     */
    interface lable{
        lable:string
    }
    function fn1(obj:lable){
        console.log(obj.lable)
    }
    fn1({lable:'lable'})


    interface SquareConfig {
        readonly color: string; //可以设置只读属性 设置一次后就无法改变了
        width?: number; // 可以设置可选属性
        [propName:string]:any //设置了这个属性就可以在这个接口添加任何赋值和属性了
      }
      // 冒号前是输入，冒号后是
      function createSquare(config: SquareConfig): {color: string; area: number} {
        let newSquare = {color: "white", area: 100};
        if (config.color) {
          newSquare.color = config.color;
        }
        if (config.width) {
          newSquare.area = config.width * config.width;
        }
        return newSquare;
      }
      let squareOptions = { colour: "red", width: 100 };
      let mySquare = createSquare(squareOptions);
      // let mySquare = createSquare({color: "black",name:'张三'});

      /* 
        绕开接口的检测有三种方式
        1 在接口里设置 [propName:string]:any 
        2 使用类型断言
        3 将传值的数据赋值给一个对象传入 （无效）
      */

        /* 
          函数类型的接口

        */
          interface SearchFunc {
            //对于这种函数类型的接口，括号中指代了函数的入参类型和数量，名称可以不一致
            // 冒号后定义了函数的返回值类型
            (source1: string, subString: string): boolean;
          }
          // let mySearch: SearchFunc;
          // mySearch = function(source: string, subString: string) {
          //   let result = source.search(subString);
          //   return result > 1;
          // }

          let mySearch: SearchFunc;
          // 这种名称完全不一致的情况也是可以的
          mySearch = function(src, sub) {
              let result = src.search(sub);
              return result > -1;
          }


          /* 
            可索引的类型
            可以创建数据的接口，指定固定索引下的类型

          */
        //  设置了一个全是字符串的数组
            interface StringArray {
              [index: number]: string;
            }
            
            // let myArray: StringArray;
            // myArray = ["Bob", "Fred"];
            // 数组中的任意值都是字符串类型
            // let myStr: string = myArray[0];

            interface ReadonlyStringArray {
              readonly [index: number]: string; //可以将所索引类型设为只读
          }
          let myArray: ReadonlyStringArray = ["Alice", "Bob"];
          // myArray[2] = "Mallory"; // error!

          /* 
            类类型
            接口可以强制规定类包含的元素,可以规定类里方法的返回值
          */

        //   interface ClockInterface {
        //       currentTime?: Date;
        //       setTime(d: Date);
        //   }
        
        // class Clock implements ClockInterface {
        //     currentTime: Date;
        //     setTime(d: Date) {
        //         this.currentTime = d;
        //     }
        //     constructor(h: number, m: number) { }
        // }


      interface ClockConstructor {
        new (hour: number, minute: number): ClockInterface;
      }
      interface ClockInterface {
          tick();
      }
      // 为了规制类的constructor入参，可以通过函数入参的方式进行监听
      function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
          return new ctor(hour, minute);
      }
      
      class DigitalClock implements ClockInterface {
          constructor(h: number, m: number) { }
          tick() {
              console.log("beep beep");
          }
      }
      class AnalogClock implements ClockInterface {
          constructor(h: number, m: number) { }
          tick() {
              console.log("tick tock");
          }
      }
      
      let digital = createClock(DigitalClock, 12, 17);
      let analog = createClock(AnalogClock, 7, 32);


      /* 
        接口的继承
      */

     interface Shape {
        color: string;
    }
     interface penStrok {
        pendWidth: number;
    }
    // 可通过extends 继承其他接口
    interface Square extends Shape,penStrok {
        sideLength: number;
    }
    
    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
    square.pendWidth = 10;



    /* 
      在上面的例子里，SelectableControl包含了Control的所有成员，包括私有成员state。 
      因为state是私有成员，所以只能够是Control的子类们才能实现SelectableControl接口。 
      因为只有Control的子类才能够拥有一个声明于Control的私有成员state，这对私有成员的兼容性是必需的。

    */
    class Control {
      private state: any;
  }
  
  interface SelectableControl extends Control {
      select(): void;
  }
  
  class Button extends Control implements SelectableControl {
      select() { }
  }
  
  class TextBox extends Control {
  
  }
  
  // Error: Property 'state' is missing in type 'Image'.
  // class Image implements SelectableControl {
  //     select() { }
  // }
  
  class Location {
  
  }


}