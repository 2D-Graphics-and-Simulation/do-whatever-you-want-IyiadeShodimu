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
    limitTo = function (Scalar) {
        this.normalise();
        this.multiply(Scalar);
        if(this.magnitude() > Scalar){
           var newX = (this.getX()/this.magnitude()) * Scalar;
           var newY = (this.getY()/this.magnitude()) * Scalar;
           var newZ = (this.getZ()/this.magnitude()) * Scalar;

            return new Vector(newX, newY, newZ);
        }
        return new Vector(this.getX(), this.getY(), this.getZ());
    };
          
    
    dotProduct(pVector) {
        var DotProduct =   (this.getX() * pVector.getX() + this.getY() * pVector.getY());

        return DotProduct;
    }

    interpolate(pVector, pScalar) {
        var interpolX = this.getX() + (pVector.getX() - this.getX()) * pScalar;
        var interpolY = this.getY() + (pVector.getY() - this.getY()) * pScalar;
        var interpolZ = this.getZ() + (pVector.getZ() - this.getZ()) * pScalar;

        return new Vector(interpolX, interpolY, interpolZ);
    }

    rotate(Scalar) {
        var cosAngle = Math.cos(Scalar);
        var sinAngle = Math.sin(Scalar);

        var rotateX = ((this.getX() * cosAngle) - (this.getY() * sinAngle));
        var rotateY = ((this.getX() * sinAngle) + (this.getY() * cosAngle));
        var rotateZ = this.getZ();
        
        
        return new Vector(rotateX, rotateY, rotateZ);
    }

    angleBetween(pVector) {
        var dotVector = this.dotProduct(pVector);
        var mag1 = this.magnitude();
        var mag2 = pVector.magnitude();

        var angleBet = Math.acos(dotVector/(mag1 * mag2));

        return angleBet;
    }
}