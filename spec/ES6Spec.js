describe("Arrows suite", function() {

  it("test Expression bodies", function() {
    var evens = [0,2,4,6,8,10];
    var odds = evens.map(v => v + 1);
    var nums = evens.map((v, i) => v + i); // v is value, i is index
    var pairs = evens.map(v => ({even: v, odd: v + 1}));

    expect(JSON.stringify(odds)).toBe(JSON.stringify([1,3,5,7,9,11]));
    expect(JSON.stringify(nums)).toBe(JSON.stringify([0,3,6,9,12,15]));
    expect(JSON.stringify(pairs)).toBe(JSON.stringify([{"even":0,"odd":1},{"even":2,"odd":3},{"even":4,"odd":5},{"even":6,"odd":7},{"even":8,"odd":9},{"even":10,"odd":11}]));
  });

});
