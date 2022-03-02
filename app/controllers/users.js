const { add } = require("../services/service");
exports.createUser = async (req, res, next) => {
  try {
    const result = await add("users", req.body);
    const error = new Error("new error");
    error.status = 400;
    throw error;
    res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
};
