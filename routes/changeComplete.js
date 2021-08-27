



const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.patch("/", function (req, res) {

    const story_id = req.body.story_id;

    b.query(`
        UPDATE stories
        WHERE id = $1`,
        [story_id])
        .then(() => {
          res.status(201).send;
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
  })
}
