const fs = require("node:fs");

function countCountries(path) {
  return new Promise(function (resolve, reject) {
    const input = fs.createReadStream(path);
    const countriesCounter = new Map();

    input.on("error", (err) => {
      reject(err);
    });

    input.on("data", function (chunk) {
      let linesArr = chunk.toString("utf8").split("\n");
      let countriesArr = linesArr.map((line) => {
        let index = line.indexOf(",");
        return line.slice(0, index);
      });

      countriesArr.shift();
      countriesArr = countriesArr.filter((country) => country != '""');

      countriesArr.forEach((country) => {
        countriesCounter.set(country, countriesCounter.get(country) + 1 || 1);
      });
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
