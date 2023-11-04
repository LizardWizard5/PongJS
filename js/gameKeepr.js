class gameKeeper{
    Board;
    canvas;
    constructor(){
        this.canvas = document.createElement("canvas");
        this.canvas.id = "myCanvas";
        this.Board = new Board();

    }
}