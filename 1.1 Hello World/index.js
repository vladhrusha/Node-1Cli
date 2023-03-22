const onTimeout = () => {
  console.log("Goodbye world");
};

const onUserExit = () => {
  const endTimestamp = Date.now();
  const secondsElapsed = Math.round((endTimestamp - startTimestamp) / 1000);
  console.log(`Stopped after ${secondsElapsed} seconds`);
  process.exit();
};

console.log("Hello World");
const startTimestamp = Date.now();

setTimeout(onTimeout, 10000);

process.on("SIGINT", onUserExit);
