const home = require("../Controllers/homeController")

const router = require ('express').Router()
router.post('/',home)

module.exports = router
