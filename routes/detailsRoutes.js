const express = require("express")

const router = express.Router()

const {
  getDetails, 
  getDetail,
  createDetail,
  updateDetail,
  deleteDetail
} = require("../controllers/contactController.js")

router.route("/details").get(getDetails)
router.route("/detail").get(getDetail)
router.route("/details/create").post(createDetail)
router.route("/details/update/:id").put(updateDetail)
router.route("/details/delete/:id").delete(deleteDetail)

module.exports = router
