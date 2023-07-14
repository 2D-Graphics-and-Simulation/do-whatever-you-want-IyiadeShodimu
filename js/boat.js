class Boat {
    constructor(pPosition, pRotation, pScale){
         this.setPosition(pPosition);
         this.setRotation(pRotation);
         this.setScale(pScale);
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
getScale() {
    return this.mScale;
}
setScale(pScale) {
    this.mScale = pScale;
}
drawHull(pContext, pWorldMatrix){
    let localTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let transform = pWorldMatrix.multiply(localTranslation);
    transform.setTransform(pContext);
    pContext.beginPath();
    pContext.fillStyle = "#964b00";
    pContext.moveTo( - 100, -50);
    pContext.lineTo( + 200, -50);
    pContext.lineTo( + 100, +50);
    pContext.lineTo( - 100, +50);
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
    pContext.moveTo( 0, -50);
    pContext.lineTo(0, -200);
    pContext.lineTo(+50, -175);
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
    pWorldMatrix.setTransform(pContext);
}
draw(pContext, pWorldMatrix) {
    let localTranslation = Matrix.createTranslation(this.getPosition());
    let transform = pWorldMatrix.multiply(localTranslation);
    let localRotation = Matrix.createRotation(this.getRotation());
    transform = transform.multiply(localRotation);
    let localScale = Matrix.createScale(this.getScale());
    transform = transform.multiply(localScale);
    transform.setTransform(pContext);
    this.drawHull(pContext, transform);  
    this.drawFlag(pContext, transform);    
    this.drawWater(pContext, transform); 
    pWorldMatrix.setTransform(pContext);
}
}