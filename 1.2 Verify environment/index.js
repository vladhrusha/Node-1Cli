let versionOption = "-v";

const util = require("util");
const exec = util.promisify(require("child_process").exec);

const packageArray = ["docker", "git", "npm", "nvm", "node"];
let promisesStack = [];

async function createPromise(package) {
  const promise = await exec(`${package} ${versionOption}`);
  return promise;
}

packageArray.forEach((package) => {
  promisesStack.push(createPromise(package));
});

Promise.all(promisesStack)
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    console.log(err);
  });
