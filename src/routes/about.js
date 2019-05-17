const express = require("express")

const aboutRouter = express.Router()

aboutRouter.use(express.static("node_modules"))
aboutRouter.use(
  express.static("node_modules/startbootstrap-agency", { index: false })
)

aboutRouter.get("/", (req, res) => {
  res.render("about", {
    nav: [
      { link: "/#services", text: "Services" },
      { link: "/#portfolio", text: "Portfolio" },
      { link: "/events", text: "Events" },
      { link: "#about", text: "About" },
      { link: "#team", text: "Team" },
      { link: "#contact", text: "Contact" }
    ]
  })
})

module.exports = aboutRouter
