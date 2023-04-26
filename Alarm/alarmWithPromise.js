const myName = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay > 0) {
      setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    } else {
      reject(new Error("Alarm delay must not be negative"));
    }
  });
}

// button.addEventListener("click", () => {
//   alarm(name.value, delay.value)
//     .then((message) => (output.textContent = message))
//     .catch((error) => (output.textContent = `Couldn't set alarm: ${error}`));
// });

button.addEventListener("click", async () => {
  try {
    const message = await alarm(myName.value, delay.value);
    output.textContent = message;
  } catch (error) {
    output.textContent = `Couldn't set alarm: ${error}`;
  }
});
