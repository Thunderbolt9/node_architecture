const express = require("express");
const compression = require("compression");

const bodyParser = require("body-parser");
const app = express();
app.use(compression());

app.use(bodyParser.json({ limit: 1024 * 1024 * 4 }));
app.use(bodyParser.urlencoded());

require("./app/routes")(app);

const port = 3000;
app.listen(port, () => {
  console.log(`server is started at port: ${port}`);
});
