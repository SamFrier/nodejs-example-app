const express = require("express")
const config = require("./config/config.json")
const ejs = require("ejs")
const eventRouter = require("./src/routes/eventRoutes")

ejs.delimiter = "$" // changed from default so that it doesn't clash with webpack
const port = config.port

const app = express()
app.set("views", "dist")
app.set("view engine", "ejs")

/* Main router */

app.use(express.static("node_modules"))
app.use(express.static("node_modules/startbootstrap-agency", { index: false }))

app.get("/", (req, res) => {
  res.render("index", {
    nav: [
      { link: "#services", text: "Services" },
      { link: "#portfolio", text: "Portfolio" },
      { link: "#about", text: "About" },
      { link: "#team", text: "Team" },
      { link: "#contact", text: "Contact" },
      { link: "/events", text: "Events" }
    ]
  })
})

app.get("/routing", (req, res) => {
  res.send("Another route")
})

/* Events router */
app.use("/events", eventRouter)

app.listen(port, err => {
  console.log("Server running on port " + port)
})
