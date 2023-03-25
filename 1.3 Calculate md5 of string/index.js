const fs = require("node:fs");
// const md5 = require("md5");
const crypto = require("node:crypto");

const writeStream = fs.createWriteStream("write.txt");

const arg = process.argv;
const string = arg[2];

try {
  let stringMD5 = crypto.createHash("md5").update(string).digest("hex");
  writeStream.write(stringMD5);
} catch (err) {
  writeStream.write("crypto support is disabled! \n");
  writeStream.write(err.code);
}
