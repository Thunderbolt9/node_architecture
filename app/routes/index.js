const res = require("express/lib/response");

module.exports = (app) => {
  app.use("/api/v1/users", require("./users"));
  app.use((error, req, res, next) => {
    console.log(error, Object.keys(error));

    res.status(error.status).json({
      message: error.message,
    });
  });
};
