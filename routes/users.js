/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  // do this instead
// need to add coockie parser to server.js
router.get('/login/:id', (req, res) => {
  req.session.user_id = req.params.id;
  res.redirect('/');
});

//create a story
router.post("/create", function(req, res) {
  if (!req.body.text) {
    res.status(400).json({ error: 'invalid request: no data in POST body'});
    return;
  }
// req.body.key defined in the ajax jquery?
  const user = req.body.user;
  const story = {
    user: user,
    content: {
      text: req.body.text
    },
    abstract:req.body.abstract,
    created_at: Date.now()
  };

  DataHelpers.saveStory(story, (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Jquery add?
      res.status(201).send();
    }
  });
});


  return router;
};

