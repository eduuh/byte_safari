let input = "";

process.stdin.on("data", (data) => {
  input += data;
});

process.stdin.on("end", () => {
  console.log("yes bana", input);
});
