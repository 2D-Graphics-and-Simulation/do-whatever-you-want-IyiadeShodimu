class Boat {
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

    let hullTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let hullTranslationNode = new SceneGraphNode(hullTranslation);
    localScaleNode.addChild(hullTranslationNode);
    let hull = new Hull();
    hullTranslationNode.addChild(hull);

    let flagTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let flagTranslationNode = new SceneGraphNode(flagTranslation);
    localScaleNode.addChild(flagTranslationNode);
    let flag = new Flag();
    flagTranslationNode.addChild(flag);

    let waterTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let waterTranslationNode = new SceneGraphNode(waterTranslation);
    localScaleNode.addChild(waterTranslationNode);
    let water = new Water();
    waterTranslationNode.addChild(water);

    this.setSceneGraphRoot(localTranslationNode);
}
}