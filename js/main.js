// the window load event handler
function onLoad() {
    var mainCanvas, mainContext, boatPosition, rootNode, updatedObjects, originMatrix, starPosition, lastTime;
    // This function will initialise our variables
    function initialiseCanvasContext() {
        // Find the canvas element using its id attribute.
        mainCanvas = document.getElementById('mainCanvas');
        // if it couldn't be found 
        if (!mainCanvas) {
            // make a message box pop up with the error.
            alert('Error: I cannot find the canvas element!');
            return;
        }
         // Get the 2D canvas context.
         mainContext = mainCanvas.getContext('2d');
         if (!mainContext) {
             alert('Error: failed to get context!');
             return;
         }
        
        updatedObjects = [];
        lastTime = Date.now();
        beginSceneGraph();
    }
    function beginSceneGraph(){
        let originVector = new Vector(mainCanvas.width, mainCanvas.height, 1);
        originVector = originVector.multiply(0.5);
        originMatrix = Matrix.createTranslation(originVector);
        rootNode = new SceneGraphNode(originMatrix);
        let vertices = [];
        vertices.push(new Vector(0, 0, 1));
        vertices.push(new Vector(mainCanvas.width, 0, 1));
        vertices.push(new Vector(mainCanvas.width, mainCanvas.height, 1));
        vertices.push(new Vector(0, mainCanvas.height, 1));
        vertices.push(new Vector(0, 0, 1));
        let background = new Polygon(vertices, '#808080');
        let backgroundVector = originVector.multiply(-1);
        let backgroundTranslation = Matrix.createTranslation(backgroundVector)
        let backgroundTranslationNode = new SceneGraphNode(backgroundTranslation);
        backgroundTranslationNode.addChild(background);
        rootNode.addChild(backgroundTranslationNode);

        boatPosition = new Vector(0, 0, 1);
        let boatRotation = 0;
        let boatScale = new Vector(1, 1, 1);
        let boat = new Boat(boatPosition, boatRotation, boatScale);
        rootNode.addChild(boat.getSceneGraphRoot());
        
        starPosition = new Vector(300, -200, 1);
        let starRotation = 0;
        let starScale = new Vector(0.4, 0.4, 1);
        let star = new Star(starPosition, starRotation, starScale);
        rootNode.addChild(star.getSceneGraphRoot());
        updatedObjects.push(boat);
    }
    // this function will actually draw on the canvas
    function draw() {
        rootNode.draw(mainContext, Matrix.createIdentity());
    }    
    function update(pDeltaTime){
        for(let i = 0;  i < updatedObjects.length; i += 1){
            let updatedObject = updatedObjects[i];
            updatedObject.update(pDeltaTime);
        }
    }
    function animationLoop(){
        let thisTime = Date.now();
        let deltaTime = (thisTime-lastTime)/1000;
        update(deltaTime);
        draw();
        lastTime = thisTime;
        requestAnimationFrame(animationLoop);
    }
    initialiseCanvasContext();
    animationLoop();
}
window.addEventListener('load', onLoad, false);