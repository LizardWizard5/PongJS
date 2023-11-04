class Board {
    ctx;
    canvas;
    paddles = [];
    balls = [];
    constructor(){
        console.log("Test");
        this.canvas = document.getElementById("myCanvas");
        this.ctx = this.canvas.getContext("2d");
        this.addPaddle();
        this.addPaddle();
        this.addBall();

        this.ctx.beginPath();
        this.ctx.rect(750,0,25,50)
        for(let x = 1; x<10; x++){
            this.ctx.rect(750,(20 * x * 5),25,50)
        }
        this.ctx.stroke();
        this.ctx.fillStyle = "#f4f4f4";
        this.ctx.fill();
        this.ctx.closePath();

        addEventListener("keydown",  (event) => {
            console.log(event.code);
            switch(event.code){
                case "KeyW":
                    this.paddles[0].moveUp(this.canvas);
                    
                break;
                case "KeyS":
                    this.paddles[0].moveDown(this.canvas);
                    
                break;

                case "ArrowUp":
                    this.paddles[1].moveUp(this.canvas);
                    
                break;
                case "ArrowDown":
                    this.paddles[1].moveDown(this.canvas);
                    
                break;
            } 
        });
    }

    addPaddle(){
        
        let xPositions = [50,1400];
        this.paddles.push(new Paddle(xPositions[this.paddles.length],100,this.ctx));
    }
    addBall(){
        this.balls.push(new Ball(this.ctx,this.canvas,this.paddles));
    }
    reDrawCanvas(array_of_object){
       
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.rect(750,0,25,50);
        for(let x = 1; x<10; x++){
            this.ctx.rect(750,(20 * x * 5),25,50)
        }
        this.ctx.stroke();
        this.ctx.fillStyle = "#f4f4f4";
        this.ctx.fill();
        this.ctx.closePath();
        
        this.paddles[0].drawPaddle(this.ctx);
        this.paddles[1].drawPaddle(this.ctx);
        this.balls[0].drawBall(this.ctx);

        if(this.balls[0].x <= 15){
            this.addScore(1);
        }
        else if(this.balls[0].x >= 1485){
            this.addScore(0);
        }

        requestAnimationFrame(this.reDrawCanvas.bind(this));
    }
    addScore(paddle){
        this.paddles[paddle].score++;
        this.balls[0] = new Ball(this.ctx,this.canvas,this.paddles);
        
    }
}