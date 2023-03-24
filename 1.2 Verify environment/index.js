const util = require("util");
const exec = util.promisify(require("child_process").exec);

const packageArray = [
  { name: "docker", versionOption: "-v" },
  { name: "git", versionOption: "-v" },
  { name: "npm", versionOption: "-v" },
  { name: "nvm", versionOption: "-v" },
  { name: "node", versionOption: "-v" },
];

const promiseStack = packageArray.map(
  async ({ name, versionOption }) => await exec(`${name} ${versionOption}`)
);

Promise.all(promiseStack).then((values) => {
  console.log(values);
});
