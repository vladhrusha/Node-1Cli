const fs = require("node:fs");
const writeStream = fs.createWriteStream("write.txt");
// const md5 = require("md5");

const arg = process.argv;
const string = arg.slice(2)[0];

let crypto;
try {
  crypto = require("node:crypto");
  let stringMD5 = crypto.createHash("md5").update(string).digest("hex");
  writeStream.write(stringMD5);
} catch (err) {
  console.error("crypto support is disabled!");
}
