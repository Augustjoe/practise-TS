import Food from "./food";
import ScorePanal from "./ScorePanal";
import Snake from "./snake";

class gameControl {
    food:Food
    scorePanal:ScorePanal
    snake:Snake
    direction:String = ''
    constructor(){
        this.food = new Food()
        this.scorePanal = new ScorePanal()
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
        this.snake.X = x -1 
        this.snake.Y = y - 1
        setTimeout(this.run.bind(this),500-this.scorePanal.level*10)
    }
}
export default gameControl