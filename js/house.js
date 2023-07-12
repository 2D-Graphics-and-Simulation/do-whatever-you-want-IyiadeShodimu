class House {
    constructor(pPosition){
         this.setPosition(pPosition);
    }

getPosition() {
    return this.mPosition;
}
setPosition(pPosition) {
    this.mPosition = pPosition;
}
drawWall(pContext){
    pContext.beginPath();
    pContext.fillStyle = "#ffffff";
    pContext.moveTo( - 100, 0);
    pContext.lineTo( + 100, 0);
    pContext.lineTo( + 100,  + 100);
    pContext.lineTo( - 100,  + 100);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
drawRoof(pContext) {
    pContext.beginPath();
    pContext.fillStyle = "#ff0000";
    pContext.moveTo( - 100, 0);
    pContext.lineTo(0,  - 100);
    pContext.lineTo( + 100, 0);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
drawDoor(pContext) {
    pContext.beginPath();
    pContext.fillStyle = "#a63f00";
    pContext.moveTo( - 25,  + 100);
    pContext.lineTo( - 25,  + 25);
    pContext.lineTo( + 25,  + 25);
    pContext.lineTo( + 25,  + 100);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
drawLeftWindow(pContext) {
    pContext.beginPath();
    pContext.fillStyle = "#0000ff";
    pContext.moveTo( - 80,  + 75);
    pContext.lineTo( - 80,  + 25);
    pContext.lineTo( - 50,  + 25);
    pContext.lineTo( - 50,  + 75);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
drawRightWindow(pContext) {
    pContext.beginPath();
    pContext.fillStyle = "#0000ff";
    pContext.moveTo( + 80,  + 75);
    pContext.lineTo( + 80,  + 25);
    pContext.lineTo( + 50,  + 25);
    pContext.lineTo( + 50,  + 75);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
}
draw(pContext) {
        this.drawWall(pContext);  
        this.drawRoof(pContext);     
        this.drawDoor(pContext);
        this.drawLeftWindow(pContext);
        this.drawRightWindow(pContext);
}
}