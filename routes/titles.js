const express = require('express');
const router  = express.Router();

module.exports = (db) => {
// the register and login process is simplified for Demo purposes.
  router.get('/', (req, res) => {

    db.query(`
    SELECT users.name AS username, stories.title AS title, stories.abstract AS abstract, stories.completed AS completed
    FROM stories
    JOIN users ON users.id = owner_id
    `)

    .then(data => res.json(data))

    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });
  return router;
}
