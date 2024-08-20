const {sum, sendingEmailTo} = require("./main");
test("sum - shuold return 3+1 = 4", function(){
    expect(sum(1,3)).toBe(4);
})
test("sum - shuold return 3+1 = 4", function(){
    expect(sum(1,3)).toBeGreaterThan(2);
})
test("sum - shuold return 3+1 = 4", function(){
    expect(sum(1,3)).toBeGreaterThanOrEqual(4);
})
test("sum - shuold return 3+1 = 4", function(){
    expect(sum(0.1,0.3)).toBeCloseTo(0.4);
})
test("sending - shuold return", function(){
    expect(sendingEmailTo("Boda")).toMatch(/thx/i);
})