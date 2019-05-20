const express = require("express")
const mongo = require("mongodb").MongoClient
const mongoId = require("mongodb").ObjectID

const dbConfig = require("../../config/config.json").database

const eventRouter = express.Router()

eventRouter.use(express.static("node_modules"))
eventRouter.use(
  express.static("node_modules/startbootstrap-agency", { index: false })
)

/**
 * Retrieve all events
 */
eventRouter.route("/").get((req, res) => {
  const url = "mongodb://" + dbConfig.host + ":" + dbConfig.port
  console.log("Connecting to MongoDB on " + url)
  mongo.connect(url, (err, client) => {
    if (err) {
      if (client instanceof mongo) {
        client.close()
      }
      return next(err)
    }

    const db = client.db(dbConfig.name)
    const collection = db.collection(dbConfig.collections.events)
    console.log(
      "Preparing to retrieve all items in collection " +
        dbConfig.collections.events
    )
    collection.find({}).toArray((err, results) => {
      if (err) {
        client.close()
        return next(err)
      }

      console.log("Successfully retrieved " + results.length + " events")
      res.render("events", {
        nav: [
          { link: "/#services", text: "Services" },
          { link: "/#portfolio", text: "Portfolio" },
          { link: "#events", text: "Events" },
          { link: "/about#about", text: "About" },
          { link: "/about#team", text: "Team" },
          { link: "#contact", text: "Contact" }
        ],
        events: results
      })
      client.close()
    })
  })
})

/**
 * Retrieve a single event by id
 */
eventRouter.route("/:id").get((req, res, next) => {
  const id = req.params.id
  const url = "mongodb://" + dbConfig.host + ":" + dbConfig.port
  console.log("Connecting to MongoDB on " + url)
  mongo.connect(url, (err, client) => {
    if (err) {
      if (client instanceof mongo) {
        client.close()
      }
      return next(err)
    }

    const db = client.db(dbConfig.name)
    const collection = db.collection(dbConfig.collections.events)
    console.log(
      "Preparing to retrieve item with id " +
        id +
        " from collection " +
        dbConfig.collections.events
    )

    let idObject = null
    try {
      idObject = new mongoId(id)
    } catch (err) {
      client.close()
      res.status(404)
      return next(new Error("Invalid id"))
    }

    collection.findOne({ _id: idObject }, (err, result) => {
      if (err) {
        client.close()
        return next(err)
      }

      if (!result) {
        client.close()
        res.status(404)
        return next(Error("Event with id" + id + " not found"))
      } else {
        console.log("Successfully found event with id " + id)
        res.render("event", {
          nav: [
            { link: "/#services", text: "Services" },
            { link: "/#portfolio", text: "Portfolio" },
            { link: "/events", text: "Events" },
            { link: "/about#about", text: "About" },
            { link: "/about#team", text: "Team" },
            { link: "#contact", text: "Contact" }
          ],
          event: result
        })
      }
    })
  })
})

module.exports = eventRouter
