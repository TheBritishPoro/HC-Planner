import axios from "axios";

function saveSettings(data) {
  return axios({
    method: "PUT",
    url: "/api/settings/save",
    params: {
      tasks: data.tasks
    }
  });
}

function loadSettings() {
  axios({
    method: "GET",
    url: "/api/settings/load"
  })
    .then(res => {
      return res;
    })
    .catch(error => {
      throw error;
    });
}

export default { saveSettings, loadSettings };
