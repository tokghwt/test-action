const { writeFileSync } = require('node:fs');

if (process.argv[2] === undefined) {
  console.error('Usage: node version-module-generator.js OUTPUT');
  process.exitCode = 1;
  return;
}

writeFileSync(process.argv[2], `module.exports = '${process.env.npm_package_version}';\n`);
