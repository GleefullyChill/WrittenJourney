const express = require('express');
const router = express.Router();


module.exports = (db) => {
  //create a story
  router.post("/create", function (req, res) {
    if (!req.body.title || !req.body.abstract) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }

    const owner_id = req.session.user_id;
    const title = req.body.title;
    const abstract = req.body.abstract;
    return db
      .query(`INSERT INTO stories (owner_id, title,abstract) VALUES ($1,$2,$3)) RETURNING *;`[owner_id, title, abstract])
      // after inputing the data into table story, render all the titles to the page.
      .then(renderTitles())


      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
        // req.body.key defined in the ajax jquery?
        // const story = {
        //   owner_id: req.session.user_id,
        //   title : req.body.title;
        //   abstract:req.body.abstract,
        //   created_at: Date.now()
        // };



      });

  });
  return router;
}
