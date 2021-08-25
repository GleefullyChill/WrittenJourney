const express = require('express');
const router  = express.Router();

module.exports = (db) => {
// the register and login process is simplified for Demo purposes.
router.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;

});
  return router;
}
