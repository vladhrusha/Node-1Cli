const crypto = require("node:crypto");
const fs = require("node:fs");

function getChecksum(path) {
  return new Promise(function (resolve, reject) {
    const hash = crypto.createHash("md5");
    const input = fs.createReadStream(path);

    input.on("error", (err) => {
      reject(err);
    });
    input.on("data", function (chunk) {
      hash.update(chunk);
    });

    input.on("close", function () {
      resolve(hash.digest("hex"));
    });
  });
}

Promise.all([getChecksum("read.txt"), getChecksum("12,5GB.mkv")])
  .then((values) => {
    console.log(values);
  })
  .catch((err) => {
    process.on("exit", (code) => {
      console.log(`About to exit with code: ${code}`);
      console.log(err);
    });
    process.exit(1);
  });
