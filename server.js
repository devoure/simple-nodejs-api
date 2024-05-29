// Setup express instance
const express = require("express");

// Load Error handler
const errorsHandler = require("./middlewares/errorsHandler.js")

// Load dotenv file to process
require("dotenv").config()

// Load port environment to port variable
const port = process.env.PORT || 5000

const app = express();

// Define url middleware
app.use('/app', require("./routes/detailsRoutes.js"))

// Handle invalid url paths
app.use('*', (req, res)=>{
  // json({"message":"URL is invalid"})
  res.status(404)
  throw new Error('INVALID URL')
})

// Load error handler middleware
app.use(errorsHandler)


app.listen(port, ()=>{
  console.log(`>>>>> Server is running on port ${port}!`) 
})
