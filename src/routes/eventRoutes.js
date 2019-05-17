const express = require("express")

const eventsData = [
  {
    name: "Event 1",
    description: "The first event",
    date: "2019.01.01",
    time: "1:00 PM",
    duration: "1 Hour",
    location: {
      streetAddr: "101 First Street",
      city: "London",
      zip: "111111",
      lon: 0,
      lat: 0
    },
    capacity: 100
  },
  {
    name: "Event 2",
    description: "The second event",
    date: "2019.02.02",
    time: "2:00 PM",
    duration: "2 Hours",
    location: {
      streetAddr: "202 Second Street",
      city: "London",
      zip: "222222",
      lon: 0,
      lat: 0
    },
    capacity: 200
  },
  {
    name: "Event 3",
    description: "The third event",
    date: "2019.03.03",
    time: "3:00 PM",
    duration: "3 Hours",
    location: {
      streetAddr: "303 Third Street",
      city: "London",
      zip: "333333",
      lon: 0,
      lat: 0
    },
    capacity: 300
  },
  {
    name: "Event 4",
    description: "The fourth event",
    date: "2019.04.04",
    time: "4:00 PM",
    duration: "4 Hours",
    location: {
      streetAddr: "404 Fourth Street",
      city: "London",
      zip: "444444",
      lon: 0,
      lat: 0
    },
    capacity: 400
  }
]

const eventRouter = express.Router()

eventRouter.use(express.static("node_modules"))
eventRouter.use(
  express.static("node_modules/startbootstrap-agency", { index: false })
)

eventRouter.route("/").get((req, res) => {
  res.render("events", {
    nav: [
      { link: "/#services", text: "Services" },
      { link: "/#portfolio", text: "Portfolio" },
      { link: "/#about", text: "About" },
      { link: "/#team", text: "Team" },
      { link: "/#contact", text: "Contact" },
      { link: "#events", text: "Events" }
    ],
    events: eventsData
  })
})

eventRouter.route("/:id").get((req, res) => {
  const id = req.params.id
  res.render("event", {
    nav: [
      { link: "/#services", text: "Services" },
      { link: "/#portfolio", text: "Portfolio" },
      { link: "/#about", text: "About" },
      { link: "/#team", text: "Team" },
      { link: "/#contact", text: "Contact" },
      { link: "/events", text: "Events" }
    ],
    event: eventsData[id]
  })
})

module.exports = eventRouter
