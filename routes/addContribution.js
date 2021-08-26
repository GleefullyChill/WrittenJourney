
const express = require('express');
const router  = express.Router();

//NOTE: this is a PATCH route, because it only updates, no creation of data
module.exports = (db) => {
  router.patch("/", (req, res) => {
    // console.log(
    //   "req.params: ", req.params,
    //   "req.body: ", req.body,
    //   "req.data: ", req.header)

    const contributionId = req.body.contribution_id;
    const storyId = req.body.story_id;

    db.query(`
    UPDATE story_contributions
    SET within_story = true
    WHERE contribution_id = $1;`,
    [contributionId])

    .then(() => {
      db.query(`
      UPDATE contributions
      SET active = false
      FROM story_contributions
      WHERE contributions.id = contribution_id
      AND story_id = $1
      AND story_contributions.within_story = false;
     `,[storyId])
        .then(() => {
          res.status(201).send();
        })
    })

    //then we have to update the page to correspond with the updated info


    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  })
  return router;
}
