



const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.patch("/", function (req, res) {

    const story_id = req.body.story_id;
    return db.query(`
        UPDATE stories
        SET completed = TRUE
        WHERE id = $1;`,
        [story_id])
        .then(() => {
          res.status(201).send();
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
  })
  return router;
}
