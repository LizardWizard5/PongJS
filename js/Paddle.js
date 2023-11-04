class Paddle{
    x;
    y;
    score = 0;
    constructor(x,y,ctx){
        this.x=x;
        this.y=y;
        ctx.beginPath();
        ctx.rect(x,y,50,100)
        ctx.stroke();
        ctx.fillStyle = "#f4f4f4";
        ctx.fill();
        ctx.closePath();
    }
    moveUp(canvas){
        if(this.y >= 0)
            this.y-=20;
    }
    moveDown(canvas){
        if(this.y <= 700)
            this.y+=20;
    }
    drawPaddle(ctx){
        ctx.beginPath();
        ctx.rect(this.x,this.y,25,100)
        ctx.stroke();
        ctx.fillStyle = "#f4f4f4";
        ctx.fill();
        ctx.closePath();
    }
}