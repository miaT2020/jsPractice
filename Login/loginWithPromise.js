const button = document.querySelector("#login");
const loginStatus = document.querySelector("#status");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

function login(email, password) {
  const delay = 0.7 + Math.random() * 2 * 10000;
  return new Promise((resolve, reject) => {
    if (password.value === "password123" && !!email) {
      setTimeout(() => {
        resolve("You are logined");
      }, delay);
    } else {
      reject(new Error("Invalid password and email"));
    }
  });
}
button.addEventListener("click", async () => {
  try {
    const statusMsg = await login(email, password);
    loginStatus.textContent = statusMsg;
  } catch (error) {
    loginStatus.textContent = error;
  }
});
