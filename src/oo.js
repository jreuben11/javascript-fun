// WITH PROTOTYPES:

// function subclassOf(base) {
//     _subclassOf.prototype= base.prototype;
//     return new _subclassOf();
// }
// function _subclassOf() {};

// Function.prototype.subclass= function(base) {
//     var c= Function.prototype.subclass.nonconstructor;
//     c.prototype= base.prototype;
//     this.prototype= new c();
// };
// Function.prototype.subclass.nonconstructor= function() {};

Function.prototype.makeSubclass= function() {
    function Class() {

        if ('_init' in this){
            this._init.apply(this, arguments);
        }
        // TODO:
        // if (!(this instanceof Class))
        //     throw('Constructor called without "new"');
        // }
    }
    Function.prototype.makeSubclass.nonconstructor.prototype= this.prototype;
    Class.prototype= new Function.prototype.makeSubclass.nonconstructor();
    return Class;
};
Function.prototype.makeSubclass.nonconstructor= function() {};



// function Shape(x, y) {
//     this.x= x;
//     this.y= y;
// }

// function Shape() { this._init.apply(this, arguments); }
// Shape.prototype._init= function(x, y) {
//     this.x= x;
//     this.y= y;
// };

Shape= Object.makeSubclass();
Shape.prototype._init= function(x, y) {
    this.x= x;
    this.y= y;
};
Shape.prototype.toString= function() {
    return 'Shape at ' + this.x + ', ' + this.y;
};






// function Circle(x, y, r) {
//     Shape.call(this, x, y); // invoke the base class's constructor function to take co-ords
//     this.r= r;
// }
// Circle.prototype= new Shape();
// Circle.prototype= subclassOf(Shape);
// Circle.subclass(Shape);

Circle= Shape.makeSubclass();
Circle.prototype._init= function(x, y, r) {
    Shape.prototype._init.call(this, x, y);
    this.r= r;
};
Circle.prototype.toString= function() {
    return 'Circular ' + Shape.prototype.toString.call(this) + ' with radius ' + this.r;
}



// WITH CLOSURES
function Shape2(x, y) {
    var that= {};

    that.x= x;
    that.y= y;

    that.toString= function() {
        return 'Shape at '+that.x+', '+that.y;
    };

    return that;
}

function Circle2(x, y, r) {
    var that= Shape2(x, y);

    that.r= r;

    var _baseToString= that.toString;
    that.toString= function() {
        return 'Circular '+_baseToString(that)+' with radius '+r;
    };

    return that;
}

class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}
