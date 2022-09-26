require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const databaseUrl = process.env.DB_URL;

mongoose
    .connect(databaseUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to database");
    })
    .catch((err) => {
        console.log("Error connecting to database", err.message);
    });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import routes
const bookRoute = require("./routes/book");

// Middleware for routes
app.use("/api", bookRoute);

app.listen(9000, ()=>{
    console.log("Listening on port 9000")
})







