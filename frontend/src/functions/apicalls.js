import axios from "axios";

async function saveSettings(data) {
  await axios
    .put("http://localhost:3005/api/settings", {
      tasks: data.tasks
    })
    .then(response => {
      console.log(response.data.jsonData.tasks);
    })
    .catch(error => {
      console.log(error);
      alert("Save Request Failed.");
    });
}

async function loadSettings() {
  let output = [];
  await axios
    .get("http://localhost:3005/api/settings")
    .then(res => {
      res.data.tasks.forEach(task => {
        output.push(task);
      });
    })
    .catch(error => {
      throw error;
    });
  return output;
}

export default { saveSettings, loadSettings };
