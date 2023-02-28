function fun() {
    /* 
        完整的函数类型定义
    */
    let myAdd:
        // 定义入参的类型和数量
        (x: number, y: number)
            =>
            // 定义返回值的类型
            number
        = function (x: number, y: number): number {
            return x + y;
        };

    let myAdd1: (baseValue: number, increment: number) => number =
        function (x, y) { return x + y; }; // 一边规定了类型，一边没有规定，会自动推论

    /* 
      可选值设置
      加上?可设置为非必传
      设置默认值有同样的效果，同时会根据默认值设置传值类型
    */
    // function buildName(firstName: string, lastName?: string) {
    function buildName(firstName: string, lastName = '11') {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }

    let result1 = buildName("Bob");  // works correctly now
    // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3 = buildName("Bob", "Adams");  // ah, just right
    let result4 = buildName("Bob", undefined);  // 设置默认值的入参可以传入undefined

    /* 
        可以使用arguments来访问所有传入的参数
        剩余参数会被当做个数不限的可选参数。 可以一个都没有，同样也可以有任意个。 编译器创建参数数组，
        名字是你在省略号（...）后面给定的名字，你可以在函数体内使用这个数组。
    */
    function buildName1(firstName: string, ...restOfName: string[]) {
        // restOfName 会拿到剩下所有的入参，并规定了剩下的入参必须是字符串
        return firstName + " " + restOfName.join(" ");
      }
      
      let employeeName = buildName1("Joseph", "Samuel", "Lucas", "MacKinzie");
    //   这个省略号也可用于规定类型定义
      let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;


      /* 
        this在函数中的应用
      */
    //   规定函数返回的接口
      interface Card {
        suit: string;
        card: number;
    }
    // 规定this的类型
    interface Deck {
        suits: string[];
        cards: number[];
        createCardPicker(this: Deck): () => Card;
    }
    let deck: Deck = {
        suits: ["hearts", "spades", "clubs", "diamonds"],
        cards: Array(52),
        // NOTE: The function now explicitly specifies that its callee must be of type Deck
        createCardPicker: function(this: Deck) {
            // 箭头函数的this与外面使用同一个this
            return () => {
                let pickedCard = Math.floor(Math.random() * 52);
                let pickedSuit = Math.floor(pickedCard / 13);
                
                return {suit: this.suits[pickedSuit], card: pickedCard % 13};
            }
        }
    }
    // 当调用时，this指向deck
    let cardPicker = deck.createCardPicker();
    let pickedCard = cardPicker();
    
    alert("card: " + pickedCard.card + " of " + pickedCard.suit);

    interface Event {
        message:string
    }

    class Handler {
        info: string;
        // this虽然好像设置了入参但真正的入参应该从e开始算
        onClickBad(this: Handler, e: Event) {
        // 也可设置this: void 这样就可以在addClickListener中传入，但无法使用this
        // onClickGood(this: void, e: Event) {
            // oops, used this here. using this callback would crash at runtime
            this.info = e.message;
        }
    }
    let h = new Handler();
    h.onClickBad({message:'1'})
    // uiElement.addClickListener(h.onClickBad); // error! 指定了this类型为Handler

    /* 
     重载
     重载是为了适应多种情况，多次定义一个函数，调用时会自动的选取对应的情况载入
    */
     let suits = ["hearts", "spades", "clubs", "diamonds"];
    //  只有两次重载 function pickCard(x): any 并不算,但必须写
     function pickCard(x: {suit: string; card: number; }[]): number;
     function pickCard(x: number): {suit: string; card: number; };
     function pickCard(x): any {
         // Check to see if we're working with an object/array
         // if so, they gave us the deck and we'll pick the card
         if (typeof x == "object") {
             let pickedCard = Math.floor(Math.random() * x.length);
             return pickedCard;
         }
         // Otherwise just let them pick the card
         else if (typeof x == "number") {
             let pickedSuit = Math.floor(x / 13);
             return { suit: suits[pickedSuit], card: x % 13 };
         }
     }
     
     let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
     let pickedCard1 = myDeck[pickCard(myDeck)];
     alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
     
     let pickedCard2 = pickCard(15);
    //  let pickedCard3 = pickCard('11'); //error

}