describe("OO suite", function() {
 'use strict';

  it("test prototype", function() {
    var x = new Shape(1,2);
    expect(x.toString()).toBe('Shape at 1, 2');
  });

  it("test prototype inheritence", function() {
    var x = new Circle(1,2,3);
    expect(x.toString()).toBe('Circular Shape at 1, 2 with radius 3');
  });
  it("test closure", function() {
    var x = new Shape2(1,2);
    expect(x.toString()).toBe('Shape at 1, 2');
  });

  it("test closure inheritence", function() {
    var x = new Circle2(1,2,3);
    expect(x.toString()).toBe('Circular Shape at 1, 2 with radius 3');
  });

  xit("test ES6 class", function() {
    var p = new Polygon(2.3);
    var area = p.calcArea();
    expect(area).toBe(6);
  });

  it("test ES5 object getter/setter", function() {
    var myObject = {
      get a() { return this._a_; },
      set a(val) {this._a_ = val * 2; }
    };
    myObject.a = 2;
    expect(myObject.a).toBe(4);
  });
});
