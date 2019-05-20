const express = require("express")
const mongo = require("mongodb").MongoClient

const dbConfig = require("../../config/config.json").database

const dbRouter = express.Router()
dbRouter.use(express.json())

/**
 * Insert an array of events into MongoDB
 */
dbRouter.post("/events", (req, res, next) => {
  const eventsData = req.body
  if (!Array.isArray(eventsData)) {
    res.status(400)
    return next(new Error("Invalid request body - must be an array"))
  }

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
      "Preparing to insert " +
        eventsData.length +
        " items into collection " +
        dbConfig.collections.events
    )
    collection.insertMany(eventsData, (err, results) => {
      if (err) {
        client.close()
        return next(err)
      }

      console.log("Successfully inserted " + eventsData.length + " events")
      res.send(results)
      client.close()
    })
  })
})

module.exports = dbRouter
