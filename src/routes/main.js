const express = require("express")

const mainRouter = express.Router()

mainRouter.use(express.static("node_modules"))
mainRouter.use(
  express.static("node_modules/startbootstrap-agency", { index: false })
)

mainRouter.get("/", (req, res) => {
  res.render("index", {
    nav: [
      { link: "#services", text: "Services" },
      { link: "#portfolio", text: "Portfolio" },
      { link: "/events", text: "Events" },
      { link: "/about#about", text: "About" },
      { link: "/about#team", text: "Team" },
      { link: "#contact", text: "Contact" }
    ]
  })
})

module.exports = mainRouter
