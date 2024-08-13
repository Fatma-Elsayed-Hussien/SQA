const { sum, sendingEmailTo, isEven, getUserByID } = require("./main");

// Test Numbers
describe("test sum", function () {
  it("should return 1+3 = 4 ", function () {
    expect(sum(1, 3)).toBe(4);
  });
  test("should return 1+3 > 4 ", function () {
    expect(sum(1, 3)).toBeGreaterThan(2);
  });
  test("should return 1+3 >= 4 ", function () {
    expect(sum(1, 3)).toBeGreaterThanOrEqual(4);
  });
  test("should return 0.1+0.2 = 0.3 ", function () {
    expect(sum(0.1, 0.4)).toBeCloseTo(0.5);
  });
});

// Strings
test("sending - should return ", function () {
  expect(sendingEmailTo("fatma")).toMatch(/verification code/i);
});

// Truthiness
describe("test isEven", function () {
  test("isEven - should return true for num 4", function () {
    expect(isEven(4)).toBeTruthy();
  });
  test("isEven - should return false for num 3", function () {
    expect(isEven(3)).toBeFalsy();
  });
});
test("validate", function () {
  let x; // undefined
  let y = 3;
  let z = null;
  expect(x).toBeUndefined();
  expect(y).toBeDefined();
  expect(z).toBeNull();
});

// Arrays
let fruits = ["mango", "banana", "strawberry"];
// let users = [
//   {name:"ahmed", age: 22},
//   {name:"mohamed", age: 23}
// ]
describe("Array", function () {
  // test("toBe", function(){
  //   expect(fruits).toBe(["mango", "banana", "strawberry"]) // 0x10 === ["mango", "banana", "strawberry"]
  // });
  test("toBe", function () {
    expect(fruits).toEqual(["mango", "banana", "strawberry"]);
  });
  test("toBe", function () {
    expect(fruits).toEqual(expect.arrayContaining(["mango", "strawberry"]));
  });
  test("toBe", function () {
    expect(fruits).toContain("mango");
  });
  // test("toBe", function(){
  //   expect(users).toContainEqual({name:"ahmed", age: 22})
  // });
});

// describe("Array", function () {
//   test("check if array contain specific item", function () {
//     expect(fruits).not.toContain("tomato");
//   });
//   // ✨ check  Reference -->   0x10 === array[..]  👉 FAIL
//   // test("check equality", function(){
//   //     expect(fruits).toBe(["mango", "banana", "strawberry"]);
//   // })
//   // ✨ check  VALUE
//   //  ["mango", "banana", "strawberry"] === ["mango", "banana", "strawberry"] 👉PASS
//   test("check equality", function () {
//     expect(fruits).toEqual(["mango", "banana", "strawberry"]); // PASS if write all items
//     // expect(fruits).toEqual(["mango", "banana"]); // FAILL
//   });
//   test("check sub array exist", function () {
//     expect(fruits).toEqual(expect.arrayContaining(["mango", "banana"]));
//   });
// });
describe("Object", function () {
  test("obj test", function () {
    // expect(getUserByID(1)).toBe({})
    expect(getUserByID(1)).toEqual({
      id: 1,
      name: "fatma",
      age: 24,
      address: "ismailia",
    });
    expect(getUserByID(1)).toEqual(
      expect.objectContaining({ id: 1, name: "fatma" })
    );
    expect(getUserByID(1)).toMatchObject({ id: 1, name: "fatma" });
    expect(getUserByID(1)).toHaveProperty("id", 1);
  });
  it("should throw error if id is not defined", function () {
    // expect(() => getUserByID()).toThrow();
    expect(function () {
      return getUserByID();
    }).toThrow();
  });
});
describe("Anything", function () {
  let y; // undefined
  let z = null;
  test("anything", function () {
    expect("fatma").toEqual(expect.anything());
    expect(33).toEqual(expect.anything());
    expect([1, 2, 3]).toEqual(expect.anything());
    // expect(y).toEqual(expect.anything()); //FAILL
    // expect(z).toEqual(expect.anything()); //FAILL
  });
});
describe("Any", function () {
  test("any", function () {
    expect("fatma").toEqual(expect.any(String));
    expect(33).toEqual(expect.any(Number));
    // expect(y).toEqual(expect.anything()); //FAILL
    // expect(z).toEqual(expect.anything()); //FAILL
  });
});

let users = [
  { name: "ahmed", age: 22 },
  { name: "mohamed", age: 21 },
];
users.push({ name: "fatma", age: 24 });

describe("Users List", function () {
  test("array should have at least one object have name(string) and age(number)", function () {
    expect(users).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        }),
      ])
    );
  });
  // strictly check that all objects match exactly
  test("every object should have the name (string) and age (number) in array", function () {
    users.forEach((user) => {
      expect(user).toEqual(
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        })
      );
    });
  });
});

// describe("Object", function () {
//   test("Check if user exist", function () {
//     // expect(user).toBe({id: 1, name: "ahmed", age: 24});  // 0x10 === obj{..}
//     expect(getUserByID(1)).toEqual({
//       id: 1,
//       name: "fatma",
//       age: 24,
//       address: "ismailia",
//     });
//   });
//   test("Check Property", function () {
//     expect(getUserByID(1)).toHaveProperty("id", 1);
//   });
//   test("Check some properties of Object", function () {
//     expect(getUserByID(1)).toEqual(
//       expect.objectContaining({ id: 1, name: "fatma" })
//     );
//   });
// });

// users = [{name:"f", age:24}, {name: "s", age: 23}]
// test("try", function(){
//   // expect(users).toContainEqual({name:"f", age:24})
//   expect().toEqual(expect.anything())
// })

// console.log("1--", ()=>getUserByID())
// console.log("2--", getUserByID())

// const users = [
//   { id: 1, name: 'Alice', age: 30 },
//   { id: 2, name: 'Bob', age: 25 },
//   { id: 3, name: 'Charlie', age: 35 }
// ];

// test("ss", function(){
//   expect(users).toEqual(expect.arrayContaining([
//     expect.objectContaining({
//       id: expect.any(Number),
//       name: expect.any(String),
//       age: expect.any(Number)
//     }),
//     // expect.objectContaining({
//     //   age: expect.toBeGreaterThan(20) // Ensure age is greater than 20
//     // })
//   ]));
// })

// test('All objects have age greater than 20', () => {
//   users.forEach(user => {
//     expect(user.age).toBeGreaterThan(20); // age should be greater than 20
//   });
// });

// ✨✨✨✨ ------ Task  ------ ✨✨✨✨
// AddToCart=[
//   {
//     id:
//     name:
//     price:             // greater than 100 .. test case 0 or -negative
//     quantity:          // greater than 1 & lessthan 5 .. test case 0 or negative
//     addedtoFav: true   // Truthiness
//   }
// ]
