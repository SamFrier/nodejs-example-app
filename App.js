const express = require("express")
const config = require("./config/config.json")
const ejs = require("ejs")
const mainRouter = require("./src/routes/main")
const aboutRouter = require("./src/routes/about")
const eventRouter = require("./src/routes/events")

ejs.delimiter = "$" // changed from default so that it doesn't clash with webpack
const port = config.port

const app = express()
app.set("views", "dist")
app.set("view engine", "ejs")

app.use("/", mainRouter)
app.use("/about", aboutRouter)
app.use("/events", eventRouter)

app.listen(port, err => {
  console.log("Server running on port " + port)
})
