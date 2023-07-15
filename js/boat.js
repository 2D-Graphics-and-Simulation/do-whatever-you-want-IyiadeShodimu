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
    let vertices = [];
    vertices.push(new Vector(-100, -50, 1));
    vertices.push(new Vector(+200, -50, 1));
    vertices.push(new Vector(+100, +50, 1));
    vertices.push(new Vector(-100, +50, 1));
    vertices.push(new Vector(-100, -50, 1));
    let hull = new Polygon(vertices, '#964b00');
    hullTranslationNode.addChild(hull);

    let flagTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let flagTranslationNode = new SceneGraphNode(flagTranslation);
    localScaleNode.addChild(flagTranslationNode);
    vertices = [];
    vertices.push(new Vector(0, -50, 1));
    vertices.push(new Vector(0, -200, 1));
    vertices.push(new Vector(+50, -175, 1));
    vertices.push(new Vector(0, -150, 1));
    vertices.push(new Vector(0, -50, 1));
    let flag = new Polygon(vertices, '#ff0000');
    flagTranslationNode.addChild(flag);

    let waterTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let waterTranslationNode = new SceneGraphNode(waterTranslation);
    localScaleNode.addChild(waterTranslationNode);
    // vertices = [];
    // vertices.add(new Vector(-500, 0, 1));
    // vertices.add(new Vector(-450, +50, 1));
    // vertices.add(new Vector(-400, 0, 1));
    // vertices.add(new Vector(-350, +50, 1));
    // vertices.add(new Vector(-300, 0, 1));
    // vertices.add(new Vector(-250, +50, 1));
    // vertices.add(new Vector(-200, 0, 1));
    // vertices.add(new Vector(-150, +50, 1));
    // vertices.add(new Vector(-100, 0, 1));
    // vertices.add(new Vector(-50, +50, 1));
    // vertices.add(new Vector(0, 0, 1));
    // vertices.add(new Vector(+50, +50, 1));
    // vertices.add(new Vector(+100, 0, 1));
    // vertices.add(new Vector(+150, +50, 1));
    // vertices.add(new Vector(+200, 0, 1));
    // vertices.add(new Vector(+250, +50, 1));
    // vertices.add(new Vector(+300, 0, 1));
    // vertices.add(new Vector(+350, +50, 1));
    // vertices.add(new Vector(+400, 0, 1));
    // vertices.add(new Vector(+450, +50, 1));
    // vertices.add(new Vector(+500, 0, 1));
    // vertices.add(new Vector(+500, +50, 1));
    // vertices.add(new Vector(+500, +500, 1));
    // vertices.add(new Vector(-500, +500, 1));
    // vertices.add(new Vector(-500, 0, 1));
    let water = new Water();
    waterTranslationNode.addChild(water);


    this.setSceneGraphRoot(localTranslationNode);
}
}