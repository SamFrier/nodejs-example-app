const express = require("express")
const config = require("./config/config.json")
const ejs = require("ejs")

ejs.delimiter = "$" // changed from default so that it doesn't clash with webpack
const port = config.port

const app = express()
app.use(express.static("node_modules"))
app.use(express.static("node_modules/startbootstrap-agency", { index: false }))

app.set("views", "dist")
app.set("view engine", "ejs")

app.get("/", (req, res) => {
  res.render("index", {
    list: ["Hello", "from ", "Ejs"],
    nav: ["Services", "Portfolio", "About", "Team", "Contact"]
  })
})

app.get("/routing", (req, res) => {
  res.send("Another route")
})

app.listen(port, err => {
  console.log("Server running on port " + port)
})
