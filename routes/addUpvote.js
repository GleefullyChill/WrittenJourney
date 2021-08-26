



const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.post("/", function (req, res) {

    const owner_id = req.session.user_id
    const contribution_id = req.body.contribution_id
    db.query(`INSERT INTO votes (owner_id, contribution_id,flag_voted)
    VALUES ($1,$2,$3)) RETURNING *`[owner_id, contribution_id, true])

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
