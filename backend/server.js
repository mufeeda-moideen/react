const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes
const registrationRoutes = require("./router/registrationRouter");
app.use("/api", registrationRoutes);

// MongoDB Connect
const port = 8080;
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});

//import Connection
const connection = require("./Connection/connection");
connection();