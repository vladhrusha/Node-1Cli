const goodbye = () => {
  console.log("Goodbye world");
};

const sigint = () => {
  const endTimestamp = Date.now();
  const secondsElapsed = Math.round((endTimestamp - startTimestamp) / 1000);
  console.log(`Stopped after ${secondsElapsed} seconds`);
  process.exit();
};

console.log("Hello World");
const startTimestamp = Date.now();

setTimeout(goodbye, 10000);

process.on("SIGINT", sigint);
