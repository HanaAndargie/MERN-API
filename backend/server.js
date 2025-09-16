const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 5000;
const color = require("colors");
const connectDB = require("./config/db");
const { errorHandler } = require("./middleware/errorMiddleware");

const port = 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use(errorHandler);

connectDB();





app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});