const express = require("express")
const config = require("./config/config.json")
const ejs = require("ejs")
const mainRouter = require("./src/routes/main")
const aboutRouter = require("./src/routes/about")
const eventRouter = require("./src/routes/events")
const dbRouter = require("./src/routes/database")

ejs.delimiter = "$" // changed from default so that it doesn't clash with webpack
const port = config.port

const app = express()
app.set("views", "dist")
app.set("view engine", "ejs")

app.use("/", mainRouter)
app.use("/about", aboutRouter)
app.use("/events", eventRouter)
app.use("/db", dbRouter)

/**
 * Error handling middleware
 */
app.use((err, req, res, next) => {
  console.error(err.message)
  if (res.statusCode === 200) {
    // will be 200 be default if not explicitly set - should be 500
    res.status(500)
  }
  res.json({ message: err.message })
})

app.listen(port, err => {
  console.log("Server running on port " + port)
})
