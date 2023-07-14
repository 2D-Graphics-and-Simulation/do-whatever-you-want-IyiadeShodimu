class Star {
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
drawStar(pContext, pWorldMatrix){
    let localTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let transform = pWorldMatrix.multiply(localTranslation);
    transform.setTransform(pContext);
    pContext.beginPath();
    pContext.fillStyle = "#c0c0c0";
    pContext.moveTo(0, -100);
    pContext.lineTo(-20, -25);
    pContext.lineTo(-100, -40);
    pContext.lineTo(-25, 13);
    pContext.lineTo(-75, 85);
    pContext.lineTo(0, 30);
    pContext.lineTo(75, 85);
    pContext.lineTo(25, 13);
    pContext.lineTo(100, -40);
    pContext.lineTo(20, -25);
    pContext.closePath();
    pContext.fill()
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
    this.drawStar(pContext, transform);   
    pWorldMatrix.setTransform(pContext);
}
}
