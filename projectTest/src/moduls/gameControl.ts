import Food from "./food";
import ScorePanal from "./ScorePanal";
import Snake from "./snake";

class gameControl {
    food:Food
    scorePanal:ScorePanal
    snake:Snake
    direction:String = ''
    isLive:boolean = true
    constructor(){
        this.food = new Food()
        this.scorePanal = new ScorePanal(10,1)
        this.snake = new Snake()                                          
        this.init()
    }
    init(){
        document.addEventListener('keydown',this.keyDownHandler.bind(this))
        this.run()
    }
    keyDownHandler(event:KeyboardEvent){
        
        this.direction = event.key
       
    }
    run(){
        let x = this.snake.X
        let y = this.snake.Y
        switch (this.direction) {
            case 'ArrowUp':
                y -= 10
                break;
            case 'ArrowDown':
                y += 10
                break;
            case 'ArrowLeft':
                x -= 10
                break;
            case 'ArrowRight':  
                x += 10
                break;
        }
        
        this.checkEat(x,y)
        try {
            this.snake.X = x 
            this.snake.Y = y 
            
        } catch (error) {
            alert('游戏结束')
            this.isLive = false
        }
        
        this.isLive && setTimeout(this.run.bind(this),300-this.scorePanal.level*20)
    }
    checkEat(x:number,y:number){
        if(this.food.X == x && this.food.Y == y){
            this.food.change()
            this.snake.addBody()
            this.scorePanal.addscore()
        }
    }
}
export default gameControl