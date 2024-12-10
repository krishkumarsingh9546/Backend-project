const express = require("express");

const app = express()

const mongoose = require("mongoose");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

async function main() {
    await mongoose.connect(MONGO_URL)
}

main()
    .then(() => {
        console.log("connected to DB")
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(8000, () => {
    console.log("server is listening to port 8000");

})

app.get("/", (req, res) => {
    res.send("hello bacha")
})