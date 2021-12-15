class Vector {
    constructor(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }
    getX() {
        return this.mX;
    }
    setX(pX) {
        this.mX = pX;
    }
    getY() {
        return this.mY;
    }
    setY(pY) {
        this.mY = pY
    }
    getZ() {
        return this.mZ;
    }
    setZ(pZ) {
        this.mZ = pZ;
    }
    add(pVector) {
        var x = pVector.getX();
        var y = pVector.getY();
        var z = pVector.getZ();
        x = this.getX() + x;
        y = this.getY() + y;
        z = this.getZ() + z;

        var vector = new Vector(x, y, z);

        return vector;
    }
    subtract(pVector) {
        var x = pVector.getX();
        var y = pVector.getY();
        var z = pVector.getZ();
        x = this.getX() - x;
        y = this.getY() - y;
        z = this.getZ() - z;

        var vector = new Vector(x, y, z);

        return vector;
    }
    multiply(pScalar) {
        var x = this.getX() * pScalar;
        var y = this.getY() * pScalar;
        var z = this.getZ() * pScalar;

        var vector = new Vector(x, y, z);
        
        return vector;
    }
    divide(pScalar) {
        var x = this.getX() / pScalar;
        var y = this.getY() / pScalar;
        var z = this.getZ() / pScalar;

        var vector = new Vector(x, y, z);
        
        return vector;
    }
    magnitude(pVector) {
        var x = this.getX();
        var y = this.getY();
        var z = this.getZ();
        var resultVector = new Vector (x, y, z);

        var magnitude = Math.sqrt((x * x) + ( y * y) + ( z * z));
        return magnitude;
        
    }
    normalise(pVector) {
        var x = this.getX()/this.magnitude();
        var y = this.getY()/this.magnitude();
        var z = this.getZ()/this.magnitude();
        var resultVector = new Vector (x, y, z)

    
        return resultVector;
    
    }
    LimitTo(pScalar) {
        var magnitude = this.magnitude();
        if(magnitude > pScalar){
            var normalisedVector = this.normalise()
            var pX = normalisedVector.getX * pScalar;
            var pY = normalisedVector.getY * pScalar;
            var pZ = normalisedVector.getZ * pScalar;

            limitToVector = new Vector(pX, pY, pZ)
            return limitedVector;
        
        }
        else{
            return this;
        }
      
    }
    dotProduct(pVector) {
        var x = this.getX();
        var y = this.getY();
        var z = this.getZ();
        
 
    }
}