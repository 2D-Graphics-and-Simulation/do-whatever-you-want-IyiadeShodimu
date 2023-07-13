// the window load event handler
function onLoad() {
    var mainCanvas, mainContext, boatPosition, boats, originMatrix;
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
        let originVector = new Vector(mainCanvas.width, mainCanvas.height, 1);
        originVector = originVector.multiply(0.5);
        originMatrix = Matrix.createTranslation(originVector);
        
        boatPosition = new Vector(0, 0, 1);
        let boatRotation = 0;
        let boatScale = new Vector(1, 1, 1);
        boats = []
        boats.push(new Boat(boatPosition, boatRotation, boatScale));

    }
    // this function will actually draw on the canvas
    function draw() {
        var i;
        mainContext.fillStyle = "#808080";
        // fill the canvas with grey
        mainContext.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
        mainContext.lineWidth = 5;
        mainContext.lineJoin = 'round' ;
        originMatrix.setTransform(mainContext);     
        for (i = 0; i < boats.length; i+=1){
            boats[i].draw(mainContext, originMatrix);
        }
    }

    
    initialiseCanvasContext();
    draw();
}
window.addEventListener('load', onLoad, false);