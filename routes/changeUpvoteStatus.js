



const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.patch("/", function (req, res) {

    const status = req.body.status;
    const owner_id = req.session.user_id;
    const contribution_id = req.body.contribution_id;

      db.query(`
        UPDATE votes
        SET upvote = $1
        WHERE owner_id = $2 AND contribution_id = $3;`,
        [status, owner_id, contribution_id])

        .then(() =>
          res.status(201).send()
        )

        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
        });
  })
  return router;
}
