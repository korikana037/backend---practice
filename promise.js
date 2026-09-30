// learning promises 
/*
 1. promises were introduced to overcame the problem of callback hell.
 2. promise is a JS object that represents the eventual result of aasynchronous operation
 3. its like saying look i dont have the result now , but i promise i will tell you whether the operation
  is succeded or not.
 4. promise has 3 states. 1. it always starts with pending state and then becomes 2. fulfilled or 3. rejected
 5. promise can be setteled only once. once settled we cannot change the state of it.
 6. it has executor function. which executes imediately. it has reject and reolve functions give by the 
 js in-built 
    resolve mean the operation succeded and reject means has failed.
 7. to get the result of promise we have .then() and .catch() methods which handles succes and failure cases
  respectively.
 8. .then() gives us a promise, 
 9. promise chaining, it works because .then() gives us a promise

 10. .then( return value *2 )returning a plain value no issue returns a promise
 11. .then(return Promise.resolve(value*2)) also gives us the Promise, Js Hanlds the nested promises for us.
 only differnces is the next .then()  waits unitl the above promise is settled and then recieves the vavlue.
 12. Error Propagation : we can throw new Error inside a .then() , and it causes the promise returned by that
  .then() to become rejected .catch()
 handles the error from this rejetion and inbetween .then() values are skipped.
12. If a promise is rejected, the engine skips all .then() blocks until it finds the first .catch().
 Once the .catch() runs,
 it returns a new, resolved promise, allowing the chain to continue.all the .then() after that will be executed.
13. When you put .catch() in the middle, it catches any errors that occurred above it. After the .catch()
 handles the error, the Promise chain is considered "fixed" or recovered.
 Unless the .catch() block throws a brand new error, the chain will continue executing any .then() blocks
  written below it.
14. Scenario 1: An error occurs before the .catch()
If a promise is rejected, the engine skips all .then() blocks until it finds the first .catch(). Once the 
.catch() runs, it returns a new, resolved promise, allowing the chain to continue.
15. Scenario 2: No errors occur
If everything works perfectly, the engine simply ignores the .catch() block in the middle. The resolved value 
passes right "through" the .catch() directly to the next .then().
16. When you do not explicitly return anything from a function in JavaScript, it implicitly returns undefined.

In a Promise chain, the .then() method automatically wraps whatever you return—even undefined—into a brand new, resolved Promise.

The execution of the next .then() in the chain does not depend on receiving a specific, meaningful value. It
 only depends on the previous Promise reaching a fulfilled state. As long as a .then() block finishes running
  without throwing an error, the Promise it generates is considered fulfilled, which triggers the next step.

17. async , awiat
    every async function returns a promise.
    async function(){ return 10} = function(){return Promise.resolve(10)}
    await - Wait for this Promise to settle, and give me its fulfilled value."
    await is basicaaly a promise consumption.
    await only stops the execution of the async function, rest synchrnous code executes normally.

18. try catch
19. async await in arrow functions 
20.sequeential vs parallel execution in async/ await

proimise.all 
promise.allSettled
promise.race()
promise.any()

21. map filter reduce.

*/

// const promise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success) {
//         resolve('data recieved');
//     }
//     else {
//         reject('soething went wrong');
//     }
// });

// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// const p1 = new Promise((resolve, reject) => {
//     resolve(20);
// })
// const p2 = p1.then((x) => {return x+10;}).then((x) => {console.log(x);});

// Promise.resolve(10)
//     .then((value) => {
//         throw new Error("Something went wrong");
//     })
//     .then((value) => {
//         console.log("This will not run");
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// async function getUser() {
//     return "Sandeep";
// }

// const result = getUser();

// console.log(result);
// Assume these two functions return Promises
// function fetchUserId(username) { ... }
// function fetchUserPosts(id) { ... }

// The old way:
function getPostsForUser(username) {
    return fetchUserId(username)
        .then((id) => {
            console.log("Found ID:", id);
            return fetchUserPosts(id); // Returning a Promise to chain it
        })
        .then((posts) => {
            console.log("Found", posts.length, "posts");
            return posts;
        });
}

async function getUserProfile(userId){
    try {
        const profile = await fetchDatabaseProfile(userId);
        return profile;
    } catch (error) {
        console.log("Database failed")
    }
}