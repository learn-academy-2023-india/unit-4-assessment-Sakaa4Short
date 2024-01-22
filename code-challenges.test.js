// UNIT 4: JavaScript Coding Practical Questions with Jest

const { number } = require("yargs")

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
describe("fibonacciLength", () => {
    it("takes in a number and returns an array containing the Fibonacci sequence", () => {
      expect(fibonacciLegnth(6)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibonacciLegnth(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

  function fibonacciLegnth(num) {
    let num1 = 1;
    let num2 = 1;
    let fibArr = [num1, num2];
    for (let i = 2; i < num; i++) {
      sum = num1 + num2;
      num1 = num2;
      num2 = sum;
      fibArr.push(sum);
    }
    return fibArr;
  }

console.log(fibonacciLegnth(10)) 
// Pseudo code:
// Create a funtion that takes in a number and returns the fibonacci sequence to the length of the input
// Take in a number and add it to the previous input
// Take the sum and add it to the next input.
// Console log the function with .legnth to create the expected output 

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// b) Create the function that makes the test pass.
describe("tally", () => {
    it("takes in an object that contains up votes and down votes and returns the end tally", () => {
      expect(tally(votes1)).toEqual(11)
      expect(tally(votes2)).toEqual(-31)
    })
  })

  function tally(object) {
        return object.upVotes - object.downVotes;
    }

  console.log(tally(votes2))
// Pseudo code:
// Create a function that subtracts upvotes from downvotes
// Output created is the tally of the two