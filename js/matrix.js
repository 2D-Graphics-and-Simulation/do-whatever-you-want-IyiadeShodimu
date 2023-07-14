class Matrix {
    constructor(pA, pB, pC, pD, pE, pF, pG, pH, pI){
        this.mElements = [];
        this.mElements.push(pA);
        this.mElements.push(pB);
        this.mElements.push(pC);
        this.mElements.push(pD);
        this.mElements.push(pE);
        this.mElements.push(pF);
        this.mElements.push(pG);
        this.mElements.push(pH);
        this.mElements.push(pI);

    }
    getElement(pRow, pColumn){
        let index = pRow * 3 + pColumn;
        return this.mElements[index];
    }
    
    setElement(pRow, pColumn, pElement){
        let index = pRow * 3 + pColumn;
        this.mElements[index] = pElement;
    }
    static createIdentity() {
        return new Matrix(1, 0 , 0, 0, 1, 0, 0, 0, 1);
    }
    static createTranslation(pVector) {
    
        var translateMatrix = new Matrix(1, 0, pVector.getX(), 0, 1, pVector.getY(), 0, 0, 1);

        return translateMatrix;
    }
    static createScale(pVector){
        var scaleMatrix = this.createIdentity();
        var row;
        var col;
        for (row = 0; row < 3; row+=1){
            for (col = 0; col < 3; col+=1){
                if (row == 0){
                    var X = pVector.getX() * scaleMatrix.getElement(row,col);
                    scaleMatrix.setElement(row, col, X);
                }
                else if (row == 1){
                    var Y = pVector.getY() * scaleMatrix.getElement(row,col);
                    scaleMatrix.setElement(row, col, Y);
                }
                else{
                    var Z = pVector.getZ() * scaleMatrix.getElement(row,col);
                    scaleMatrix.setElement(row, col, Z);
                }
            }

        }
        return scaleMatrix;
    }
    static createRotation(pScalar){
        var sinAngle = Math.sin(pScalar);
        var cosAngle = Math.cos(pScalar);
        var rotateMatrix = new Matrix(cosAngle, -sinAngle, 0, sinAngle, cosAngle, 0, 0, 0, 1);
        return rotateMatrix;
    }

    multiply(pMatrix){
        var X1 = ((pMatrix.getElement(0, 0) * this.getElement(0, 0))+(pMatrix.getElement(1, 0) * this.getElement(0, 1)) + (pMatrix.getElement(2, 0) * this.getElement(0, 2)));
        var X2 = ((pMatrix.getElement(0, 0) * this.getElement(1, 0))+(pMatrix.getElement(1, 0) * this.getElement(1, 1)) + (pMatrix.getElement(2, 0) * this.getElement(1, 2)));
        var X3 = ((pMatrix.getElement(0, 0) * this.getElement(2, 0))+(pMatrix.getElement(1, 0) * this.getElement(2, 1)) + (pMatrix.getElement(2, 0) * this.getElement(2, 2)));

        var Y1 = ((pMatrix.getElement(0, 1) * this.getElement(0, 0))+(pMatrix.getElement(1, 1) * this.getElement(0, 1)) + (pMatrix.getElement(2, 1) * this.getElement(0, 2)));
        var Y2 = ((pMatrix.getElement(0, 1) * this.getElement(1, 0))+(pMatrix.getElement(1, 1) * this.getElement(1, 1)) + (pMatrix.getElement(2, 1) * this.getElement(1, 2)));
        var Y3 = ((pMatrix.getElement(0, 1) * this.getElement(2, 0))+(pMatrix.getElement(1, 1) * this.getElement(2, 1)) + (pMatrix.getElement(2, 1) * this.getElement(2, 2)));

        var Z1 = ((pMatrix.getElement(0, 2) * this.getElement(0, 0))+(pMatrix.getElement(1, 2) * this.getElement(0, 1)) + (pMatrix.getElement(2, 2) * this.getElement(0, 2)));
        var Z2 = ((pMatrix.getElement(0, 2) * this.getElement(1, 0))+(pMatrix.getElement(1, 2) * this.getElement(1, 1)) + (pMatrix.getElement(2, 2) * this.getElement(1, 2)));
        var Z3 = ((pMatrix.getElement(0, 2) * this.getElement(2, 0))+(pMatrix.getElement(1, 2) * this.getElement(2, 1)) + (pMatrix.getElement(2, 2) * this.getElement(2, 2)));

        return new Matrix(X1, Y1, Z1, X2, Y2, Z2, X3, Y3, Z3);
    }
    multiplyVector(pVector){
        var X = ((this.getElement(0, 0) * pVector.getX()) + (this.getElement(0, 1) * pVector.getY()) + (this.getElement(0, 2) * pVector.getZ()));
        var Y = ((this.getElement(1, 0) * pVector.getX()) + (this.getElement(1, 1) * pVector.getY()) + (this.getElement(1, 2) * pVector.getZ()));
        var Z = ((this.getElement(2, 0) * pVector.getX()) + (this.getElement(2, 1) * pVector.getY()) + (this.getElement(2, 2) * pVector.getZ()));
        return new Vector(X, Y, Z);
    }
    setTransform(pContext){
        pContext.setTransform(this.getElement(0, 0), this.getElement(1, 0), this.getElement(0, 1), this.getElement(1, 1), this.getElement(0, 2), this.getElement(1, 2));
    }
    transform(pContext){
        pContext.transform(this.getElement(0, 0), this.getElement(1, 0), this.getElement(0, 1), this.getElement(1, 1), this.getElement(0, 2), this.getElement(1, 2));
    }
}