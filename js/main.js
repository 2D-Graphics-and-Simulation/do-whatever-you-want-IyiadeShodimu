// the window load event handler
function onLoad() {
    var mainCanvas, mainContext, housePosition, houses, originMatrix;
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
        
        housePosition = new Vector(0, 0, 1);
        houses = []
        houses.push(new House(housePosition));

    }
    // this function will actually draw on the canvas
    function draw() {
        var i;
        mainContext.fillStyle = "#add8e6";
        // fill the canvas with light blue
        mainContext.fillRect(0, 0, mainCanvas.width, mainCanvas.height);
        mainContext.lineWidth = 5;
        mainContext.lineJoin = 'round' ;
        originMatrix.setTransform(mainContext);     
        for (i = 0; i < houses.length; i+=1){
            houses[i].draw(mainContext, originMatrix);
        }
    }

    
    initialiseCanvasContext();
    draw();
}
window.addEventListener('load', onLoad, false);