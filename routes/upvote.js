const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //add an upvote to the contribution
  const owner_id = req.session.user_id;
  const contribution_id = req.prams.contribution_id;
  // const numVotes = 0; this needs to be added
  router.post("/", function (req, res) {
    // Firstly, check if the user has already voted. If flag_voted is true, update to make it false and return the votes number to update.
    db.query(`SELECT flag_voted FROM votes WHERE owner_id = $1 AND contribution_id = $2`[owner_id, contribution_id])
      .then((result) => { return result.rows[0].flag_voted })
      .then((upvote) => {
        if (upvote === true) {
          db.query(`UPDATE votes SET upvote = false WHERE owner_id = $1`[owner_id])
          // use select count contribution id
          return numOfVotes;

      // function to update the number of votes
      .then()
      // function like changing the heart sign from red to white inside the below .then
      .then()
    }


    // secondly, the returned is empty, meaning the user has not voted
    if (!upvote) {
      return db
        .query(`INSERT INTO votes (owner_id, contribution_id,flag_voted) VALUES ($1,$2,$3)) RETURNING *;`[owner_id, contribution_id, true])
        // function to update the number of votes
        .then()


    }
    //  thirdly, if a user liked and then unliked, the record has already there in the database, so it needs an update
    if (upvote === false) {
      db.query(`UPDATE votes SET upvote = true WHERE owner_id = $1`[owner_id])
      return numOfVotes;
    }
  })
    // function to update the number of votes
    .then()
    // function like changing the heart sign from red to white inside the below .then
    .then()
  })
  return router;
});

}
