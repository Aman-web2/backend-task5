const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/users", require("./routes/userRoutes"));

// Default Route
app.get("/", (req, res) => {
    res.send("Backend Task 5 Running 🚀");
});

// Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});