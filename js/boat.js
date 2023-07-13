class Boat {
    constructor(pPosition, pRotation){
         this.setPosition(pPosition);
         this.setRotation(pRotation);
    }

getPosition() {
    return this.mPosition;
}
setPosition(pPosition) {
    this.mPosition = pPosition;
}
getRotation() {
    return this.mRotation;
}
setRotation(pRotation) {
    this.mRotation = pRotation;
}
drawHull(pContext, pWorldMatrix){
    let localTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let transform = pWorldMatrix.multiply(localTranslation);
    transform.setTransform(pContext);
    pContext.beginPath();
    pContext.fillStyle = "#964b00";
    pContext.moveTo( - 100, 0);
    pContext.lineTo( + 200, -300);
    pContext.lineTo( + 100,  - 100);
    pContext.lineTo( - 100,  + 100);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
    pWorldMatrix.setTransform(pContext);
}
drawFlag(pContext, pWorldMatrix) {
    let localTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let transform = pWorldMatrix.multiply(localTranslation);
    transform.setTransform(pContext);
    pContext.beginPath();
    pContext.fillStyle = "#ff0000";
    pContext.moveTo( 0, -100);
    pContext.lineTo(0, -250);
    pContext.lineTo(+50, -225);
    pContext.lineTo(0, -150);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
    pWorldMatrix.setTransform(pContext);
}
drawWater(pContext, pWorldMatrix) {
    let localTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let transform = pWorldMatrix.multiply(localTranslation);
    transform.setTransform(pContext);
    pContext.beginPath();
    pContext.fillStyle = "#add8e6";
    pContext.moveTo( -500, +500);
    pContext.lineTo(-450, +400);
    pContext.lineTo(-400, +400);
    pContext.lineTo(-350, +300);
    pContext.lineTo(-300, +300);
    pContext.lineTo(-250, +200);
    pContext.lineTo(-200, +200);
    pContext.lineTo(-150, +100);
    pContext.lineTo(-100, +100);
    pContext.lineTo(-50, +0);
    pContext.lineTo(0, 0);
    pContext.lineTo(+50, -100);
    pContext.lineTo(+100, -100);
    pContext.lineTo(+150, -200);
    pContext.lineTo(+200, -200);
    pContext.lineTo(+250, -300);
    pContext.lineTo(+300, -300);
    pContext.lineTo(+350, -400);
    pContext.lineTo(+400, -400);
    pContext.lineTo(+450, -500);
    pContext.lineTo(+500, -500);
    pContext.lineTo(+500, -100);
    pContext.lineTo(-500, +1000);
    pContext.closePath();
    pContext.fill();
    pContext.stroke();
    pWorldMatrix.setTransform(pContext);
}
draw(pContext, pWorldMatrix) {
    let localTranslation = Matrix.createTranslation(this.getPosition());
    let transform = pWorldMatrix.multiply(localTranslation);
    let localRotation = Matrix.createRotation(this.getRotation());
    transform = transform.multiply(localRotation);
    transform.setTransform(pContext);
    this.drawHull(pContext, transform);  
    this.drawFlag(pContext, transform);    
    this.drawWater(pContext, transform); 
    pWorldMatrix.setTransform(pContext);
}
}