



const express = require('express');
const router = express.Router();

module.exports = (db) => {
  //add an upvote to the contribution

  // const numVotes = 0; this needs to be added
  router.get("/", function (req, res) {

    const owner_id = req.session.user_id;
    const contribution_id = req.query.contribution_id;
    const voteArray = [];
    // Firstly, check if the user has already voted. If flag_voted is true, update to make it false and return the votes number to update.
    db.query(`
    SELECT flag_voted
    FROM votes
    WHERE owner_id = $1 AND contribution_id = $2`,
    [owner_id, contribution_id])
      .then(data => {
        if (data && data.rows && data.rows[0]) {
          const voteState = data.rows[0].flag_voted;
          voteArray.push(voteState);
        } else {
          voteArray.push("undefined");
        }
      })
      .then(voteState => {
        db.query(`
        SELECT COUNT(*)
        FROM votes
        WHERE contribution_id = $1
        AND flag_voted = TRUE`,
        [contribution_id])
          .then(data => {
            const votes = data.rows[0].count;
            voteArray.push(votes);
            voteArray.push(contribution_id)
            console.log(voteArray)
            return voteArray;
          })
          .then(data => {
            res.json(data);
          })
          .catch(err => {
            res
              .status(500)
              .json({ error: err.message });
          });

        return voteState;
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  })
  return router;
}


