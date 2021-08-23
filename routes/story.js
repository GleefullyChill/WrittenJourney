

//All routes for story should go through here


const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  //will be called every time a title is clicked to show the full story and contributions
  //should the story disappear if another title is clicked? should we have it just be hidden and the element can just unhide if clicked again?
  router.get("/", (req, res) => {
    const story_id = req.params.story_id;
    const withinStoryElement = [];
    return db.query(`
    SELECT contributions.content AS content, users.name AS username, time_stamp AS date
    FROM story_contributions
    JOIN contributions ON contributions.id = contributions_id
    JOIN users ON owner_id = users.id
    WHERE story_id = $1
    AND within_story = true
    AND active = true
    ORDER BY time_stamp;`, [story_id]
    )
      .then(data => {
        const story = data.rows;
        withinStoryElement.push(story);
      return db.query(`
      SELECT contributions.content AS content, users.name AS username, time_stamp AS date
      FROM story_contributions
      JOIN contributions ON contributions.id = contributions_id
      WHERE story_id = $1
      AND within_story = false
      AND active = true
      ORDER BY time_stamp;`, [story_id]
      )
      .then(data => {
        const contributions = data.rows;
        withinStoryElement.push(contributions);
        return withinStoryElement;
      })
        //renderStory(story)? or return to jQuery
        //called in jQuery?
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
    //this should return the contributions.id for the following .then
      .then(id => {
        const contribution_id = id.rows;
        //multiple INSERT requires multiple query
        db.query(`
        INSERT INTO votes (owner_id, contribution_id)
        VALUES ($1, $2)`
        [user_id, contribution_id])
        return contribution_id;
        //IS this return needed, or could it just be sent back by the db
      })
      .then(id => {
        db.query(`
        INSERT INTO story_contributions (story_id, owner_id, contribution_id)
        VALUES($1, $2, $3)`,
        [story_id, user_id, id])
      })
      //
      //Where does this information go
      //We need to call a jQuery here, or for it to be similar to tweeter, right?
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
