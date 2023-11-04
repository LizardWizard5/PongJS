class Ball{
    //Positioning data
    x =735;
    y =385;
    //Speed data
    vX;
    vY;
    vIncrementor=0;
    //Paddle data for collision
    paddles = [];
    constructor(ctx,canvas,paddles){
        ctx.beginPath();
        ctx.arc(735, 385, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
        this.vX =	Math.floor(Math.random() * 2) === 0 ? -3 : 3;
	    this.vY =	Math.floor(Math.random() * 2) === 0 ? -3 : 3;
        this.paddles = paddles;
    }
    moveBall(){
        if(this.y <= 15){
            
            
            this.vY=3;
        }
        else if(this.x <= this.paddles[0].x+25 && (this.y >= this.paddles[0].y && this.y <= this.paddles[0].y+100)){
            this.vIncrementor++;
            
            this.vX=3 + this.vIncrementor;
        }
        else if(this.x >= this.paddles[1].x-25 &&  (this.y >= this.paddles[1].y && this.y <= this.paddles[1].y+100)){
            this.vIncrementor++;
            this.vX=-3 - this.vIncrementor;
        }
        else if(this.y >= 785){
            
            this.vY=-3;
        }
        
        this.x+=this.vX;
        this.y+=this.vY;
    }
    drawBall(ctx){
        
        this.moveBall();
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

    }
}