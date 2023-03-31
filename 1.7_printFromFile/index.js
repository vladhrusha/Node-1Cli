const fs = require("node:fs");

const readline = require("node:readline/promises");
const { output } = require("node:process");

function countCountries(path) {
  return new Promise(function (resolve, reject) {
    const input = fs.createReadStream(path);
    const rl = readline.createInterface({ input, output });
    const countriesCounter = new Map();

    input.on("error", (err) => {
      reject(err);
    });

    rl.on("line", function (chunk) {
      let index = chunk.indexOf(",");
      let country = chunk.slice(0, index);
      countriesCounter.set(country, countriesCounter.get(country) + 1 || 1);
    });

    input.on("close", function () {
      resolve(countriesCounter);
    });
  });
}

countCountries("free_company_dataset.csv")
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    process.on("exit", (code) => {
      console.log(`About to exit with code: ${code}`);
    });
    process.exit(1);
  });
