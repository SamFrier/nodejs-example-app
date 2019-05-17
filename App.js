const express = require("express")
const config = require("./config/config.json")

const port = config.port
const app = express()

app.use(express.static("dist"))
app.use(express.static("node_modules"))
app.use(express.static("node_modules/startbootstrap-agency"))

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.get("/routing", (req, res) => {
  res.send("Another route")
})

app.listen(port, err => {
  console.log("Server running on port " + port)
})