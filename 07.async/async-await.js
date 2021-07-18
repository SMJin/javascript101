// async & await
// clear style of using promise :)

// 1. async

// function promise_fetchUser() {
//     return new Promise((resolve, reject) => {
//         resolve('Jinn O');
//     });
// }

// const user = promise_fetchUser();
// user.then(console.log);
// console.log(user);

async function fetchUser() {
    // do network request in 10 sec ...
    return 'jinn O';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return 'apple';
}

// function promise_getBanana() {
//     return delay(1000)
//     .then(() => 'banana');
// }

async function getBanana() {
    await delay(1000);
    return 'banana';
}

// function promise_pickFruit() {
//     return getApple()
//     .then(apple => {
//         return getBanana()
//         .then(banana => `${apple} + ${banana}`);
//     })
// }
// promise_pickFruit().then(console.log);

async function pickFruit() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}
pickFruit().then(console.log);

// 3. useful Promise APIs
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join(` + `)
    );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);