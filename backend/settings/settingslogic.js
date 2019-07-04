const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../", "settings.json");

async function readSettings() {
  let settingsData = await new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) console.log(error);
      resolve(JSON.parse(data));
    });
  });
  return settingsData;
}

async function writeSettings(data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), err => {
    if (err) return console.log(err);
  });
  return data;
}

module.exports = { readSettings, writeSettings };
