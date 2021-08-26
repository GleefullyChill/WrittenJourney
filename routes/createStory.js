const express = require('express');
const router = express.Router();
const renderTitles = require('../public/scripts/renderTitles')


module.exports = (db) => {
  //create a story
  router.post("/", function (req, res) {

    const ownerId = req.session.user_id;
    const title = req.body.title;
    const abstract = req.body.abstract;
    const date = Date.now();
    return db.query(`INSERT INTO stories (owner_id, title,abstract) VALUES ($1,$2,$3) RETURNING *;`, [ownerId, title, abstract])
      // after inputing the data into table story, render all the titles to the page.
      .then((data) => {
        const storyId = data.rows[0].id;
        db.query(`INSERT INTO contributions (date)
        VALUES ($1)
        RETURNING *;`, [date])
        .then(data => {
          const contributionId = data.rows[0].id;
          db.query(`INSERT INTO story_contributions (story_id, owner_id, contribution_id, within_story)
          VALUES ($1, $2, $3, TRUE);`, [storyId, ownerId, contributionId]);
          res.json(data.rows[0]);
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
