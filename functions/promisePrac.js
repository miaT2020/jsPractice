// //new promise take 2 parameters
let p = new Promise((resolve, reject) => {
  //define what actual promise is,
  let a = 1 + 1;
  //if success, resolve promise
  if (a === 2) {
    resolve("success"); //only pass the message
    //if fail, reject promise
  } else {
    reject("falile error");
  }
});
//how to interact the promise with then and catch
//process the result of the promise
//inside then, pass the result to the resolve function
p.then((mesage) => {
  console.log("this is in the then " + mesage);
}).catch((message) => {
  console.log("this is in the catch " + message);
});

//
function watchTutorialCallback(callback, errorCallback) {
  const userLeft = false;
  const userWatchingCatMeme = false;
  if (userLeft) {
    errorCallback({
      name: "User Left  ",
      message: "from errorCallback :(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme",
      message: "from errorCallback WebDevSimplified < Cat",
    });
  } else {
    callback("form success callback: Thumbs up and Subscribe");
  }
}

watchTutorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

function watchTutorialPromise() {
  let userLeft = false;
  let userWatchingCatMeme = false;
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "WebDevSimplified < Cat",
      });
    } else {
      resolve("promise: Thumbs up and Subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

let turnOnRecording = false;
const recordVideoOne = new Promise((resolve, reject) => {
  if (turnOnRecording) {
    resolve("Video 1 Recorded");
  } else {
    reject({
      name: "Video 1 ",
      message: "Video 1 missing",
    });
  }
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
  .then((messages) => {
    console.log(messages);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });

Promise.race([recordVideoOne, recordVideoTwo, recordVideoThree])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log("something went wrong " + error.name + " " + error.message);
  });

//promise chain
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3 * 1000);
});

p2.then((result) => {
  console.log(result); // 10
  return result * 2;
})
  .then((result) => {
    console.log(result); // 20
    return result * 3;
  })
  .then((result) => {
    console.log(result); // 60
    return result * 4;
  });
