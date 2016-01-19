describe("Arrows suite", function() {
  'use strict';
  it("test Expression bodies", function() {
    var evens = [0,2,4,6,8,10];
    var odds = evens.map(v => v + 1);
    var nums = evens.map((v, i) => v + i); // v is value, i is index
    var pairs = evens.map(v => ({even: v, odd: v + 1}));

    expect(JSON.stringify(odds)).toBe(JSON.stringify([1,3,5,7,9,11]));
    expect(JSON.stringify(nums)).toBe(JSON.stringify([0,3,6,9,12,15]));
    expect(JSON.stringify(pairs)).toBe(JSON.stringify([{"even":0,"odd":1},{"even":2,"odd":3},{"even":4,"odd":5},{"even":6,"odd":7},{"even":8,"odd":9},{"even":10,"odd":11}]));
  });

  it("statement bodies", function(){
    var nums = [1,2,3,4,5,6,7,8,9,10];
    var fives = [];
    nums.forEach(v => {
      if (v % 5 === 0)
        fives.push(v);
    });
    expect(JSON.stringify(fives)).toBe(JSON.stringify([5,10]));
  });
});

describe("ES5", function() {
  it("truthy", function() {
    var zero = "0";
    var naught = 0;
    expect(zero == naught).toBe(true);
    expect(zero === naught).toBe(false);
  });

  it("this", function() {
    function foo(something) {
      this.a = something;
    }
    foo(1);
    expect(a).toBe(1);
    var obj1 = {};
    var bar = foo.bind( obj1 );
    bar( 2 );
    expect( obj1.a).toBe(2);
    var baz = new bar(3);
    expect( obj1.a ).toBe(2);
    expect( baz.a ).toBe(3);
  });
});
