const childProcess = require("node:child_process");

const onOutputPackageVersion = (package) => {
  childProcess.exec(`${package} -v`, (error, stdout, stderr) => {
    if (error) {
      error.code = "127";
      console.error(error.code);
      console.error(`${stderr}`);
      return;
    }
    console.log(`${stdout}`);
  });
};

onOutputPackageVersion("docker");
onOutputPackageVersion("git");
onOutputPackageVersion("npm");
onOutputPackageVersion("nvm");
onOutputPackageVersion("node");
