var jwt = require("jsonwebtoken");
const JWT_SECRET = "Pyaardimenukichahida";

const fetchuser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    res.status(401).send({ error: "token tidak valid" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "token tidak valid" });
  }
};

module.exports = fetchuser;
