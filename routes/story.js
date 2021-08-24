

//All routes for story should go through here


const express = require('express');
const router  = express.Router();

//function is called in routes /:story/add_contribution and /:story

const getStoryInfo = function(story_id) {

    //need somewhere to store the data to return
    const withinStoryElement = [];

    //get all the necessary information from the database in two parts
    //the first query gets all content that will be part of the story
    return db.query(`
    SELECT contributions.content AS content, users.name AS username, time_stamp AS date, story_id AS id
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

      //the second query gets all the content that will be part of the contributions
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
      //should return the array, withinStoryElement, need more information to test
  })

}
module.exports = (db) => {
  getStoryInfo();
  //will be called every time a title is clicked to show the full story and contributions
  router.get("/", (req, res) => {

    const story_id = req.params.story_id;

    //function is above
    getStoryInfo(story_id)
      .then(data => {

        const story = data[0];
        const contributions = data[1];

        //function is in scripts/renderStory.js
        renderStory(story, contributions)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  //when a user posts a contribution it must route to here, because it is within that story
  router.post("/contribute", (req, res) => {

    //
    const user_id = req.session.user_id;
    const story_id = req.params.story_id;
    const contribution = req.body.contribution
    const date = Date.now();
    db.query(`
    INSERT INTO contributions (content, date)
    VALUES ($1, $2)
    RETURNING id;`,
    [contribution, date])
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
      .then(db.query(`
        SELECT users.name AS username
        FROM users
        where users.id = $1`,
        [user_id]))
      .then(username => {
        newContribution(username, contribution)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
};
