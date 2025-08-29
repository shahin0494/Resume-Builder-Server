// import json server
const JSONServer = require("json-server")

// create server for running json file
const rBuilderServer = JSONServer.create()

// import db.json
const router = JSONServer.router("db.json")

// create middleware
const middleware = JSONServer.defaults()

// define port to run the app
const PORT = 3000 || process.env.PORT

// use middleware json server
rBuilderServer.use(middleware)

// define routes for client request
rBuilderServer.use(router)

// run server for client request
rBuilderServer.listen(PORT,()=>{
    console.log(`rBuilderServer started at port : ${PORT} and waiting for client request 🥸`);
    
})