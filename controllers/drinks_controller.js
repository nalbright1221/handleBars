var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var drinks = require("../models/drinks.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  drinks.all(function(data) {
    var hbsObject = {
      drinks: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/drinks", function(req, res) {
  drinks.create([
    "drink_name", "chugIt"
  ], [
      //this will change once we create the post route
    req.body.drink_name, req.body.chugIt
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/drinks/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  // console.log('chug it:' + JSON.stringify(req.body))
  // console.log("condition", condition);

  drinks.update({
      //sleepy will change 
    chugIt: 1
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
