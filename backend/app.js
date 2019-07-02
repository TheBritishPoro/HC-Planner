const Express = require("express");
const App = Express();
const settings = require("./settings");

if (process.env.NODE_ENV === "prod") {
  App.use(Express.static(__dirname + "/../frontend/build"));
}

App.listen(3005, () => {
  console.log("=================================");
  console.log("=         OSRS PLANNER          =");
  console.log("=          Port: 3005           =");
  console.log("=================================");
});

App.get("/api/settings/save", async (req, res, next) => {
  console.log("settings/load called");
  const jsonData = await settings.readSettings();
  return res.send(jsonData);
});

App.put("/api/settings/save", async (req, res, next) => {
  console.log("settings/save called");
  const jsonData = await settings.writeSettings(req.query["tasks"]);
  return res.send(jsonData);
});
