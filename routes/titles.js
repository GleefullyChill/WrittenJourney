const express = require('express');
const router  = express.Router();

module.exports = (db) => {
// the register and login process is simplified for Demo purposes.
  router.get('/', (req, res) => {

    db.query(`
    SELECT users.name AS username, stories.title AS title, stories.abstract AS abstract, stories.completed AS completed, stories.id AS story_id
    FROM stories
    JOIN users ON users.id = owner_id
    ORDER BY stories.id
    `)

    .then(data => {
      const titles = data.rows
      res.json(titles)
    })

    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });
  return router;
}
