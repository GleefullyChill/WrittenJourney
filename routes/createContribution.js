


const express = require('express');
const router  = express.Router();


module.exports = (db) => {


  router.post("/", (req, res) => {

    //
    const user_id = req.session.user_id;
    const story_id = req.body.story_id;
    const contribution = req.body.content;
    const date = Date.now();

    db.query(`
    INSERT INTO contributions (content, date)
    VALUES ($1, $2)
    RETURNING *;`,
    [contribution, date])
    //this should return the contributions.id for the following .then
      .then(id => {
        const contribution_id = id.rows[0].id;
        //multiple INSERT requires multiple query
        db.query(`
        INSERT INTO votes (owner_id, contribution_id)
        VALUES ($1, $2)
        RETURNING *;`,
        [user_id, contribution_id])
        return contribution_id;
        //IS this return needed, or could it just be sent back by the db
      })
      .then(id => {
        db.query(`
        INSERT INTO story_contributions (story_id, owner_id, contribution_id)
        VALUES($1, $2, $3)
        RETURNING *;`,
        [story_id, user_id, id])
        .then(() => {
          res.status(201).send();
        })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}
