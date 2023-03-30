const md5File = require("md5-file");

const arg = process.argv;

const file = arg[2];

const hash = md5File.sync(file);
console.log(`The MD5 sum of ${file} is: ${hash}`);
