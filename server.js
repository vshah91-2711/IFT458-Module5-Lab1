
const express = require("express");
const loggerMiddleware = require("./middleware/loggerMiddleware");

const app = express();
const PORT = 3000;

// Middleware setup
app.use(express.json());
app.use(loggerMiddleware);

// Home route
app.get("/", (req, res) => {
    res.json({
        message: "Middleware is working!"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

