// sum.js
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
	


//sum.test.js

describe("Summation Test" , () => {

    test('add 1 + 2 to equals 3',() =>{
        //S-1) Arrange & act
        var result = sum(1,2);
        //S-2) Assert
        expect(result).toBe(3);
    
        // expect(actual output).toBe(expected output);
    });
    
    test('add 4 + 5 not to equals 12',() =>{
        expect(sum(4,5)).not.toBe(13);
    
        // expect(actual output).not.toBe(expected output);
    });

})

describe("Subtraction Test", () => {
    test("subtract 5 - 1 equals to 4", () => {
        expect(subtract(5, 1)).toBe(4);
      });
})

describe("Hooks testing", () => {

    var in1 = 2;
    var in2 = 5;

    beforeAll(()=>{
        console.log("before all test called")
    });

    afterAll(()=>{
        console.log("After all test called")
    });

    beforeEach(()=>{
        console.log("before each called");
        in1 = 1;
        in2 = 2;
    });

    afterEach(()=>{
        console.log("afterEach called")
    });

    test("adding 1 + 2 should return 3",()=>{
        var result = sum(in1, in2);
        expect(result).toBe(3);
    });

    test("subtract 1 - 2 should return -1",()=>{
        var result = subtract(in1, in2);
        expect(result).toBe(-1);
    });

})
