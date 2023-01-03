class ScorePanal{
    score = 0;
    level = 0;
    scoreElement:HTMLElement
    levelElement:HTMLElement
    maxLevel:number
    upScore:number
    constructor(maxLevel:number = 10,upScore:number = 10){
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
        this.maxLevel = maxLevel
        this.upScore = upScore
    }
    addscore(){
        this.score++;
        this.scoreElement.innerHTML = this.score + '';
        if(this.score % this.upScore === 0){
            this.upLevel()
        }
    }
    upLevel(){
        if(this.level < this.maxLevel){
            this.level++;
            this.levelElement.innerHTML = this.level + '';
        }
    }
}

export default ScorePanal