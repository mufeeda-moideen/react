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
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
  console.log("✅ Connected to MongoDB");
  app.listen(process.env.PORT, () => {
    console.log(`🚀 Server running on http://localhost:${process.env.PORT}`);
  });
}).catch(err => {
  console.error("MongoDB connection error:", err);
});
