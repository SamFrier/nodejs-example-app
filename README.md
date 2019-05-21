# nodejs-example-app

Basic web app using Node.js and Express.

## Requirements

- Node + npm
- Docker

## Getting Started

### Setting up the database

The `database` directory contains a Docker Compose file that can be used to run a MongoDB container:

```sh
cd database
docker-compose up
```

### Running the app

To build and run the app:

```sh
npm install
npm run build
npm start
```

Alternatively:
```sh
npm install
npm run build-start # will automatically rebuild + reload the app on code changes
```


The app can then be accessed on the port specified in `config.json`.

### Inserting data

While the app is running, you can insert data into the database via **POST /db/events**, with the request body being a JSON array (see the `exampleData.json` file for an example). Remember to set the `Content-Type` header to `application/json`!

Note: this is an example app meant to be run locally and as such the endpoints have no authentication -- obviously this would be a *very bad idea* in a live app!

## Credits

Uses Bootstrap template [Agency](https://startbootstrap.com/themes/agency/).

Adapted from the course ["Fundamentals of Node.js"](https://www.oreilly.com/library/view/fundamentals-of-nodejs/100000006A0428/) by Stone River eLearning on O'Reilly.