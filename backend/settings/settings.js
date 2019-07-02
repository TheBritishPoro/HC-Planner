const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../", "settings.json");

async function readSettings() {
  let settingsData = await new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) throw error;
      resolve(JSON.parse(data));
    });
  });
  return data;

  async function writeSettings(data) {
    await fs.writeFile(filePath, data, err => {
      if (err) return console.log(err);
    });
    return data;
  }
}

module.exports = { getSettings, writeSettings };
