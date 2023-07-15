class Polygon{
    constructor(pVertices, pFillColour){
        this.setVertices(pVertices);
        this.setFillColour(pFillColour);
    }
    getNumberOfVertices(){
        return this.mVertices.length;
    }
    setVertices(pVertices){
        this.mVertices = pVertices;
    }
    getVertex(pIndex){
        return this.mVertices[pIndex];
    }
    getFillColour(){
        return this.mFillColour;
    }
    setFillColour(pFillColour){
        this.mFillColour = pFillColour;
    }
    draw(pContext){
        pContext.beginPath();
        pContext.fillStyle = this.getFillColour();
        let firstVertex = this.getVertex(0);
        pContext.moveTo(firstVertex.getX(), firstVertex.getY());
        for(let i = 1; i < this.getNumberOfVertices(); i+=1){
            let vertex = this.getVertex(i);
            pContext.lineTo(vertex.getX(), vertex.getY());
        }
        let lastVertex = this.getVertex(this.getNumberOfVertices()-1);
        if(firstVertex.getX() == lastVertex.getX() && firstVertex.getY() == lastVertex.getY()){
            pContext.closePath();
        }
        pContext.fill();
        pContext.stroke();
    }
}