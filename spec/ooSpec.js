describe("OO suite", function() {

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
    var x = new Polygon(2.3);
    var y = x.calcArea();
    expect(y).toBe(6);
  });
});
