class Star {
    constructor(pPosition, pRotation, pScale){
         this.setPosition(pPosition);
         this.setRotation(pRotation);
         this.setScale(pScale);
         this.setRotationRate(Math.PI/6);
         this.setVelocity(new Vector(-10, 10, 1));
         this.beginSceneGraph();
    }

getPosition() {
    return this.mPosition;
}
setPosition(pPosition) {
    this.mPosition = pPosition;
}
getVelocity() {
    return this.mVelocity;
}
setVelocity(pVelocity) {
    this.mVelocity = pVelocity;
}
getRotation() {
    return this.mRotation;
}
setRotation(pRotation) {
    this.mRotation = pRotation;
}
getRotationRate() {
    return this.mRotationRate;
}
setRotationRate(pRotationRate) {
    this.mRotationRate = pRotationRate;
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
getSceneGraphRotationNode(){
    return this.mRotationNode;
}
setSceneGraphRotationNode(pRotationNode){
    this.mRotationNode = pRotationNode;
}
beginSceneGraph(){
    let localTranslation = Matrix.createTranslation(this.getPosition());
    let localRotation = Matrix.createRotation(this.getRotation());
    let localScale = Matrix.createScale(this.getScale());
    let localTranslationNode = new SceneGraphNode(localTranslation);
    let localRotationNode = new SceneGraphNode(localRotation);
    this.setSceneGraphRotationNode(localRotationNode);
    let localScaleNode = new SceneGraphNode(localScale);
    localTranslationNode.addChild(localRotationNode);
    localRotationNode.addChild(localScaleNode);

    let starTranslation = Matrix.createTranslation(new Vector(0, 0, 1));
    let starTranslationNode = new SceneGraphNode(starTranslation);
    localScaleNode.addChild(starTranslationNode);
    let vertices = [];
    let rand = Math.floor(Math.random() *5);
    vertices.push(new Vector(0, -100, 1).multiply(rand));
    vertices.push(new Vector(-20, -25, 1).divide(rand));
    vertices.push(new Vector(-100, -40, 1).divide(rand));
    vertices.push(new Vector(-25, +13, 1).divide(rand));
    vertices.push(new Vector(-75, +85, 1).divide(rand));
    vertices.push(new Vector(0, +30, 1).divide(rand));
    vertices.push(new Vector(+75, +85, 1).divide(rand));
    vertices.push(new Vector(+25, +13, 1).divide(rand));
    vertices.push(new Vector(+100, -40, 1).divide(rand));
    vertices.push(new Vector(+20, -25, 1).divide(rand));
    vertices.push(new Vector(0, -100, 1).divide(rand));
    let star = new Polygon(vertices, '#ffffff');
    starTranslationNode.addChild(star);

    let star2Translation = Matrix.createTranslation(new Vector(-800, 0, 1));
    let star2TranslationNode = new SceneGraphNode(star2Translation);
    localScaleNode.addChild(star2TranslationNode);
    vertices = [];
    let rand2 = Math.floor(Math.random() *5);
    vertices.push(new Vector(0, -100, 1).divide(rand2));
    vertices.push(new Vector(-20, -25, 1).divide(rand2));
    vertices.push(new Vector(-100, -40, 1).divide(rand2));
    vertices.push(new Vector(-25, +13, 1).divide(rand2));
    vertices.push(new Vector(-75, +85, 1).divide(rand2));
    vertices.push(new Vector(0, +30, 1).divide(rand2));
    vertices.push(new Vector(+75, +85, 1).divide(rand2));
    vertices.push(new Vector(+25, +13, 1).divide(rand2));
    vertices.push(new Vector(+100, -40, 1).divide(rand2));
    vertices.push(new Vector(+20, -25, 1).divide(rand2));
    vertices.push(new Vector(0, -100, 1).divide(rand2));
    let star2 = new Polygon(vertices, '#ffffff');
    star2TranslationNode.addChild(star2);

    let star3Translation = Matrix.createTranslation(new Vector(-1200, 0, 1));
    let star3TranslationNode = new SceneGraphNode(star3Translation);
    localScaleNode.addChild(star3TranslationNode);
    vertices = [];
    let rand3 = Math.floor(Math.random() *5);
    vertices.push(new Vector(0, -100, 1).divide(rand3));
    vertices.push(new Vector(-20, -25, 1).divide(rand3));
    vertices.push(new Vector(-100, -40, 1).divide(rand3));
    vertices.push(new Vector(-25, +13, 1).divide(rand3));
    vertices.push(new Vector(-75, +85, 1).divide(rand3));
    vertices.push(new Vector(0, +30, 1).divide(rand3));
    vertices.push(new Vector(+75, +85, 1).divide(rand3));
    vertices.push(new Vector(+25, +13, 1).divide(rand3));
    vertices.push(new Vector(+100, -40, 1).divide(rand3));
    vertices.push(new Vector(+20, -25, 1).divide(rand3));
    vertices.push(new Vector(0, -100, 1).divide(rand3));
    let star3 = new Polygon(vertices, '#ffffff');
    star3TranslationNode.addChild(star3);

    let star4Translation = Matrix.createTranslation(new Vector(-600, -100, 1));
    let star4TranslationNode = new SceneGraphNode(star4Translation);
    localScaleNode.addChild(star4TranslationNode);
    vertices = [];
    let rand4 = Math.floor(Math.random() *5);
    vertices.push(new Vector(0, -50, 1).divide(rand4));
    vertices.push(new Vector(-10, -12, 1).divide(rand4));
    vertices.push(new Vector(-50, -20, 1).divide(rand4));
    vertices.push(new Vector(-12, +6, 1).divide(rand4));
    vertices.push(new Vector(-37, +42, 1).divide(rand4));
    vertices.push(new Vector(0, +15, 1).divide(rand4));
    vertices.push(new Vector(+37, 42, 1).divide(rand4));
    vertices.push(new Vector(+12, +6, 1).divide(rand4));
    vertices.push(new Vector(+50, -20, 1).divide(rand4));
    vertices.push(new Vector(+10, -12, 1).divide(rand4));
    vertices.push(new Vector(0, -50, 1).divide(rand4));
    let star4 = new Polygon(vertices, '#ffffff');
    star4TranslationNode.addChild(star4);

    this.setSceneGraphRoot(localTranslationNode);
}
update(pDeltaTime){
    let currentRotationDelta = this.getRotationRate() * pDeltaTime;
    let newRotation = this.getRotation() + currentRotationDelta;
    this.setRotation(newRotation);
    let rotationNode = this.getSceneGraphRotationNode();
    let newRotationMatrix = Matrix.createRotation(newRotation);
    rotationNode.setLocalTransformation(newRotationMatrix);


    let currentVelocity = this.getVelocity().multiply(pDeltaTime);
    let newPosition = this.getPosition().add(currentVelocity);
    this.setPosition(newPosition);
    let translationNode = this.getSceneGraphRoot();
    let newTranslationMatrix = Matrix.createTranslation(newPosition);
    translationNode.setLocalTransformation(newTranslationMatrix); 
}
}
