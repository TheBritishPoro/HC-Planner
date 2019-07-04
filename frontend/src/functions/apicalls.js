import axios from "axios";

function saveSettings(data) {
  axios
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

function loadSettings() {
  axios({
    method: "GET",
    url: "http://localhost:3005/api/settings"
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      throw error;
    });
}

export default { saveSettings, loadSettings };
