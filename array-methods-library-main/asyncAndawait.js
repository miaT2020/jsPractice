// const fetchUserOne = async () => {
//   const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const json = await result.json();
//   return json;
// };

// const fetchUserTwo = () => {
//   return fetch("https://jsonplaceholder.typicode.com/todos/2").then((response) =>
//     response.json()
//   );
// };

async function main() {
  const result1 = fetchUserOne();
  const result2 = fetchUserTwo();

  console.log(result1);
  console.log(result2);

  const awaitedResult1 = await result1;
  const awaitedResult2 = await result2;

  console.log(awaitedResult1);
  console.log(awaitedResult2);
}

const fetchUser = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await result.json();
};

function main1() {
  setTimeout(() => console.log("done", 2000));
}

async function main2() {
  const result = await fetchUser();
  console.log(result);
}

main1();
main2().then(console.log("main2 complete"));

function makeRequst(location) {
  return new Promise((resolve, reject) => {
    console.log(location);
    if (locatin === "Google") {
      resolve("Google say hi");
    } else {
      reject("Google refuse say hi");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("processing response");
    resolve("Extra inofromation  +${response}");
  });
}
