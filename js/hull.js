class Hull{
    constructor(){}

    draw(pContext){
        pContext.beginPath();
        pContext.fillStyle = "#964b00";
        pContext.moveTo( - 100, -50);
        pContext.lineTo( + 200, -50);
        pContext.lineTo( + 100, +50);
        pContext.lineTo( - 100, +50);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
}