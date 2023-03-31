const fs = require("node:fs");

function getChecksum(path) {
  return new Promise(function (resolve, reject) {
    const input = fs.createReadStream(path);
    const map = new Map();
    input.on("error", (err) => {
      reject(err);
    });
    input.on("data", function (chunk) {
      map.set(chunk.toString("utf8"));
    });

    input.on("close", function () {
      resolve(map);
    });
  });
}

Promise.all([getChecksum("free_company_dataset.csv")])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    process.on("exit", (code) => {
      console.log(`About to exit with code: ${code}`);
    });
    process.exit(1);
  });
