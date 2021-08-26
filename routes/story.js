

//All routes for story should go through here


const express = require('express');
const router  = express.Router();

//function is called in routes /:story/add_contribution and /:story

module.exports = (db) => {

  //will be called every time a title is clicked to show the full story and contributions
  router.get("/", (req, res) => {

    const storyId = req.query.story_id;

      //need somewhere to store the data to return
    const withinStoryElement = [];

    //get all the necessary information from the database in two parts
    //the first query gets all content that will be part of the story
    db.query(`
    SELECT contributions.content AS content, users.name AS username, date AS date, story_id AS id
    FROM story_contributions
    JOIN contributions ON contributions.id = contribution_id
    JOIN users ON story_contributions.owner_id = users.id
    WHERE story_id = $1
    AND within_story = true
    AND active = true
    ORDER BY date;`, [storyId]
    )
      .then(data => {
        const story = data.rows;
        withinStoryElement.push(story);

      //the second query gets all the content that will be part of the contributions
      return db.query(`
      SELECT contributions.content AS content, users.name AS username, date AS date, contribution_id AS id
      FROM story_contributions
      JOIN contributions ON contributions.id = contribution_id
      JOIN users ON story_contributions.owner_id = users.id
      WHERE story_id = $1
      AND within_story = false
      AND active = true
      ORDER BY date;`, [storyId]
      )
      .then(data => {
        const contributions = data.rows;
        withinStoryElement.push(contributions);
        withinStoryElement.push(storyId)
        return withinStoryElement;
      })
      .then(data => {
        res.json(data)
      })

      //should return the array, withinStoryElement, need more information to test
    })

     .catch(err => {
       res
         .status(500)
         .json({ error: err.message });
     });
  })
  return router;
};
