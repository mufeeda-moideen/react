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


app.listen(8080, () => {
    console.log(`🚀 Server running on http://localhost:8080`);
  });