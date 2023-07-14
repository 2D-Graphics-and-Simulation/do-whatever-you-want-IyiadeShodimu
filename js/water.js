class Water{
    constructor(){}

    drawWater(pContext) {
        pContext.beginPath();
        pContext.fillStyle = "#add8e6";
        pContext.moveTo(-500, 0);
        pContext.lineTo(-450, +50);
        pContext.lineTo(-400, 0);
        pContext.lineTo(-350, +50);
        pContext.lineTo(-300, 0);
        pContext.lineTo(-250, +50);
        pContext.lineTo(-200, 0);
        pContext.lineTo(-150, +50);
        pContext.lineTo(-100, 0);
        pContext.lineTo(-50, +50);
        pContext.lineTo(0, 0);
        pContext.lineTo(+50, +50);
        pContext.lineTo(+100, 0);
        pContext.lineTo(+150, +50);
        pContext.lineTo(+200, 0);
        pContext.lineTo(+250, +50);
        pContext.lineTo(+300, 0);
        pContext.lineTo(+350, +50);
        pContext.lineTo(+400, 0);
        pContext.lineTo(+450, +50);
        pContext.lineTo(+500, 0);
        pContext.lineTo(+500, +50);
        pContext.lineTo(+500, +500);
        pContext.lineTo(-500, +500);
        pContext.closePath();
        pContext.fill();
        pContext.stroke();
}
}