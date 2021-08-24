
const express = require('express');
const router  = express.Router();

//
module.exports = (db) => {
  router.patch("/", (req, res) => {
    const id = req.params.story_contributions_id;
    const story_id = req.params.story_id;
    db.query(`
    UPDATE story_contributions
    SET within_story = true
    WHERE id = $1;`,
    [id])
    .then(data => {
      db.query(`
      UPDATE story_contributions
      JOIN contributions ON contributions.id = story_contributions
      SET active = false
      WHERE NOT story_contributions.id = $1
      AND story.id = $2;`,[id, story_id])
    })
    .then(getStoryInfo(story_id))
    .then(data =>
      renderStory(data))
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })
  return router;
}
