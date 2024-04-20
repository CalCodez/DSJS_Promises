/**
 * PROMISE CONSTRUCTOR (Resolve with onFulfilled callback argument )
 * Please, make sure to read the "01 Promise-constructor.md" file in exercise-info folder before you start!
 **/

export const createOneSecondPromise = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`The PROMISE was RESOLVED`);
    }, 10);
  });
  promise
    .then((data) => console.log(data));
  return promise

}

export const logMessageAfterOneSecond = (message) => {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 10);
  });
  promise
    .then((data) => console.log(data));
  return promise



  // use the 'createOneSecondPromise' function, and a `onFulfilled` callback with a `.then` method
  // to log the `message` parameter we pass in after one second
};

export const logMessageAfterOneSecondAwait = async (message) => {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 10);
  });
  promise
    .then((data) => console.log(data));
  return promise


  // use the 'createOneSecondPromise' function, and the await keyword
  // to create a function that logs a message after one second
  // in an async function it automatically returns a promise no matter what you return, so you don't need to
  // worry about what you return
};

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
