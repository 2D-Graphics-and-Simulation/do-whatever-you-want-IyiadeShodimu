class Star {
    constructor(pPosition, pRotation, pScale){
         this.setPosition(pPosition);
         this.setRotation(pRotation);
         this.setScale(pScale);
         this.beginSceneGraph();
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
getSceneGraphRoot(){
    return this.mRootNode;
}
setSceneGraphRoot(pSceneGraphNode){
    this.mRootNode = pSceneGraphNode;
}
beginSceneGraph(){
    let localTranslation = Matrix.createTranslation(this.getPosition());
    let localRotation = Matrix.createRotation(this.getRotation());
    let localScale = Matrix.createScale(this.getScale());
    let localTranslationNode = new SceneGraphNode(localTranslation);
    let localRotationNode = new SceneGraphNode(localRotation);
    let localScaleNode = new SceneGraphNode(localScale);
    localTranslationNode.addChild(localRotationNode);
    localRotationNode.addChild(localScaleNode);

    let starTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let starTranslationNode = new SceneGraphNode(starTranslation);
    localScaleNode.addChild(starTranslationNode);
    let vertices = [];
    vertices.push(new Vector(0, -100, 1));
    vertices.push(new Vector(-20, -25, 1));
    vertices.push(new Vector(-100, -40, 1));
    vertices.push(new Vector(-25, +13, 1));
    vertices.push(new Vector(-75, +85, 1));
    vertices.push(new Vector(0, +30, 1));
    vertices.push(new Vector(+75, +85, 1));
    vertices.push(new Vector(+25, +13, 1));
    vertices.push(new Vector(+100, -40, 1));
    vertices.push(new Vector(+20, -25, 1));
    vertices.push(new Vector(0, -100, 1));
    let star = new Polygon(vertices, '#ffffff');
    starTranslationNode.addChild(star);

    this.setSceneGraphRoot(localTranslationNode);
}
}
