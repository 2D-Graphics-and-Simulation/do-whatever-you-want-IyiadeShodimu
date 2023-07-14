class Flag{
    constructor(){}

    draw(pContext) {
        pContext.beginPath();
        pContext.fillStyle = "#ff0000";
        pContext.moveTo(0, -50);
        pContext.lineTo(0, -200);
        pContext.lineTo(+50, -175);
        pContext.lineTo(0, -150);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
    }
}