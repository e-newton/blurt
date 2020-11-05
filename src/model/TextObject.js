export class TextObject {
    constructor(text, x, y){
        this.x = x;
        this.y = y;
        this.text = text;
    }
    setTarget(target){
        this.target = target;
    }
    follow(){
        if(!this.target) return;
        let difference = {x: this.target.x - this.x, y: this.target.y - this.y};
        let size = Math.sqrt(Math.pow(difference.x, 2) + Math.pow(difference.y, 2))
        if(size < 5) return;
        difference.x = difference.x/size
        difference.y = difference.y/size
        size = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
        let unit = {x: this.x/size, y: this.y/size}
        const speed = 5;
        this.y += speed * difference.y;
        this.x += speed * difference.x;


    }
    fall(){
        this.y++;
    }
}
