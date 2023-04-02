const fs = require("node:fs");

const readline = require("node:readline/promises");
const { output } = require("node:process");

async function countCountries(path) {
  return new Promise(async function (resolve, reject) {
    const input = fs.createReadStream(path);
    const rl = readline.createInterface({ input, output });
    const countriesCounter = new Map();

    input.on("error", (err) => {
      reject(err);
    });

    for await (const line of rl) {
      let index = line.indexOf(",");
      let country = line.slice(0, index);
      countriesCounter.set(country, countriesCounter.get(country) + 1 || 1);
    }

    input.on("close", function () {
      resolve(countriesCounter);
    });
  });
}
const startTimestamp = Date.now();
countCountries("free_company_dataset.csv")
  .then((values) => {
    console.log(values);
    const endTimestamp = Date.now();
    const secondsElapsed = Math.round((endTimestamp - startTimestamp) / 1000);
    console.log(`Stopped after ${secondsElapsed} seconds`);
  })
  .catch((err) => {
    process.on("exit", (code) => {
      console.log(`About to exit with code: ${code}`);
    });
    process.exit(1);
  });
