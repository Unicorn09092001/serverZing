/**
 * class HomeController
 */
 class top100Controller {
    /**
     * @param {*} req
     * @param {*} res
     */
    index(req, res, next) {
      res.send(
        "Top100 Page"
      )
    }
  }
  
  module.exports = new top100Controller
  