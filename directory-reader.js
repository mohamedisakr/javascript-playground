const fs = require("fs");

const directory_name =
  "F:\\Videos\\API Security\\EggHead Web Security Essentials MITM, CSRF, and XSS";

// Function to get current filenames in directory
const filenames = fs.readdirSync(directory_name);

console.log("\nFilenames in directory:");
filenames.forEach((file) => {
  console.log(`"${file}",`);
});
