const Express = require("express");
const app = Express();
const settings = require("./settings/settingslogic");
const bodyParser = require("body-parser");

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(3005, () => {
  console.log("OSRS PLANNER");
  console.log("Port: 3005");
});

app.get("/api/settings", async (req, res, next) => {
  console.log("/settings GET called");
  const jsonData = await settings.readSettings();
  return res.send(jsonData);
});

app.put("/api/settings", async (req, res, next) => {
  console.log("/settings PUT called");
  console.log(req.body);
  const jsonData = await settings.writeSettings(req.body);
  return res.send({ jsonData });
});
