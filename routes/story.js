

//All routes for story should go through here


const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    const story_id = req.params.story_id;
    db.query(`
    SELECT * FROM stories
    WHERE id = $1;`, [story_id]
    )
      .then(data => {
        const story = data.rows;
        res.json({ story });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  //when a user posts a contribution it must route to here, because it is within that story
  router.post("/contribute", (req, res) => {
    const user_id = req.session.user_id;
    const story_id = req.params.story_id;
    const contribution = req.body.contribution
    db.query(`
    INSERT INTO contributions (content)
    VALUES ($1)
    RETURNING id;`,
    [contribution])
      .then(id => {
        const contribution_id = id.rows;
        db.query(`
        INSERT INTO votes (owner_id, contribution_id)
        VALUES ($1, $2)`
        [user_id, contribution_id])
        return contribution_id;
      })
      .then(id => {
        db.query(`
        INSERT INTO story_contributions (story_id, owner_id, contribution_id)
        VALUES($1, $2, $3)`,
        [story_id, user_id, id])
      })
      //
      // .then(data => {
      //   const users = data.rows;
      //   res.json({ users });
      // })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
