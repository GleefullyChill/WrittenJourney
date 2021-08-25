const express = require('express');
const router  = express.Router();

module.exports = (db) => {
// the register and login process is simplified for Demo purposes.
router.get('/:user_id', (req, res) => {
  req.session.user_id = req.params.user_id;
  res.redirect('/');


});
  return router;
}
