class Snake {
    element:HTMLElement
    header:HTMLElement
    body:HTMLCollection
    constructor(){
        this.element = document.getElementById('snake')!
        this.header = document.querySelector('#snake > div')!
        this.body = this.element.getElementsByTagName('div')
    }
    get X(){
        return this.header.offsetLeft
    }
    get Y(){
        return this.header.offsetTop
    }
    set X(value:number){
        this.header.style.left = value + 'px'
    }
    set Y(value:number){    
        this.header.style.top = value + 'px'
    }
    addBody(){
        this.element.insertAdjacentHTML('beforeend','<div><div/>')
    }
}

export default Snake