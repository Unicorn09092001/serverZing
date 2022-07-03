const express = require("express")
const router = express.Router()

const top100 = require("../controllers/top100Controller")

router.get("/top100", top100.index)

module.exports = router
