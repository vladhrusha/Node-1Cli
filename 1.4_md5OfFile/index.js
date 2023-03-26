const util = require("util");
const crypto = require("node:crypto");
const readFile = util.promisify(require("node:fs").readFile);
const readFilePromise = readFile("read.txt", "utf8");

readFilePromise
  .then((fileContent) => {
    let md5String = crypto.createHash("md5").update(fileContent).digest("hex");
    console.log(md5String);
  })
  .catch((err) => {
    console.log(err);
    process.on("exit", (code) => {
      console.log(`About to exit with code: ${code}`);
    });
    process.exit(1);
  });
