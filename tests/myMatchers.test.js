// --------------- Create Custom Matcher -----------------
// 1) toHaveLengthGreaterThan
expect.extend({
  toHaveLengthGreaterThan(received, expected){
    const pass = received.length > expected;
    if(pass){
      return{
        pass: true,
        message: function(){
          return `expect(${received}).toHaveLengthGreaterThan(${expected})`
        }
      }
    }
    else{
      return {
        pass: false,
        message: ()=> `expect(${received}).toHaveLengthGreaterThan(${expected}) \n Expected: ${expected} \n Received: ${received}`
        
      }
    }
  }
})

// expect(received).toHaveLengthGreaterThan(expected);
it("check toHaveLengthGreaterThan", function(){
  expect("hello").toHaveLengthGreaterThan(3);
})

// -----------------------------------------------------
// 2) toBeEven
// expect(received).toBeEven()
// expect(4).toBeEven()  --> PASS
expect.extend({
  toBeEven(received){
    const pass = received % 2 === 0; 
    if(pass){
      return{
        pass: true,
        message: function(){ return `expect(${received}).toBeEven()` }
      }
    }
    else{
      return{
        pass: false,
        message: function(){ return `${received} not even` }
      }
    }
  }
})

test("tobeven", function(){
  expect(4).toBeEven();
  expect(3).not.toBeEven();
})

// -----------------------------------------------------
// 3) toBeWithinRange

// expect(received).toBeWithinRange(min, max);
// expect(3).toBeWithinRange(5, 9);
expect.extend({
  toBeWithinRange(received, min, max){
    const pass = received >= min && received <= max;
    if(pass){
      return{
        pass: true,
        message: function(){return `expect(${received}). toBeWithinRange(${min}, ${max})`}
      }
    }
    else{
      return{
        pass: false,
        message:function(){return `expect(${received}). toBeWithinRange(${min}, ${max})`}
      }
    }
  }
})

test("range", function(){
  expect(3).toBeWithinRange(1, 4);
  expect(9).not.toBeWithinRange(1, 4);
})


