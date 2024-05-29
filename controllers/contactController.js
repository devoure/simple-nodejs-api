const asyncHandler = require("express-async-handler")

// simple promise
//
let getData = new Promise(function(resolve, reject) {
  // the function is executed automatically when the promise is constructed

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve("Process Done"), 5000);
})
//@desc gets all details from db
//@access public
//@route GET app/details
const getDetails = asyncHandler(async (req, res)=>{
  let data = await getData
  res.status(200).json({"message":"Endpoint to get details", "process-status":data})
})

//@desc gets single detail from db
//@access public
//@route GET app/detail
const getDetail = asyncHandler(async (req, res)=>{
  
  res.status(200).json({"message":"Endpoint to get a single detail"})
})

//@desc creates a new detail in db
//@access public
//@route POST app/details/create
const createDetail = asyncHandler(async (req, res)=>{
  console.log("Details from user", req.body)
  res.status(200).json({"message":"Endpoint to create a new detail"})
})

//@desc updates details in db
//@access public
//@route PUT app/details
const updateDetail = asyncHandler(async (req, res)=>{
  res.status(200).json({"message":"Endpoint to update details"})
})

//@desc delete a detail from db
//@access public
//@route DELETE app/details
const deleteDetail = asyncHandler(async (req, res)=>{
  res.status(200).json({"message":"Endpoint to delete detail"})
})


module.exports = {
  getDetail,
  getDetails,
  createDetail,
  updateDetail,
  deleteDetail
}
