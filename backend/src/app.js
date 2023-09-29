const express = require("express");
const cors = require("cors");
const middlewareErrorHandler = require("./middleware/middlewareErrorHandler");
const morganLogger = require("./utils/logger");
const morgan = require("morgan");

const app = express();

app.use(cors({ origin: "*", credentials: false }));
app.use(morgan(morganLogger));
app.use(express.json());

app.use("/api/auth", require("./routers/authRouter"));
app.use("/api/notes", require("./routers/notesRouter"));

app.use(middlewareErrorHandler);

module.exports = app;
