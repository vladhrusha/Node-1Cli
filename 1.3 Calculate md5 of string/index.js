const crypto = require("node:crypto");

const arg = process.argv;
const string = arg[2];

try {
  let stringMD5 = crypto.createHash("md5").update(string).digest("hex");
  console.log(stringMD5);
} catch (err) {
  process.on("exit", (code) => {
    console.log(`About to exit with code: ${code}`);
  });
  process.exit(1);
}
