const express = require("express");
const { authRouter } = require("./routes/authRoute");
const {errorHandler} = require("./middlewares/errorMiddleware");

const app = express();

app.use(express.json());

app.use("/api/v1/auth", authRouter);

// Error handling middleware must be registered after routes
app.use(errorHandler);

module.exports = app;