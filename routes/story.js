

//All routes for story should go through here


const express = require('express');
const router  = express.Router();

//function is called in routes /:story/add_contribution and /:story

module.exports = (db) => {

  const getStoryInfo = function(story_id, db) {

    //need somewhere to store the data to return
    const withinStoryElement = [];

    //get all the necessary information from the database in two parts
    //the first query gets all content that will be part of the story
    db.query(`
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
      db.query(`
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


  //will be called every time a title is clicked to show the full story and contributions
  router.get("/", (req, res) => {

    const story_id = req.params.story_id;

    //function is above
    getStoryInfo(story_id, db)
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
  })
};
