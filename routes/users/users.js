var express = require('express');
var router = express.Router();
var passport = require('passport');

var userController = require('./controller/userController');

/* GET users listing. */
router.get('/', passport.authenticate('jwt', { session: false }), function(req, res, next) {
  res.send('Thanks for hitting this API');
});

router.post('/sign-up', function(req, res) {
console.log(req.body)
  userController.signup(req.body)
                .then( user => {
                  res.json(user);
                })
                .catch( error => {
                  res.status(error.status).json(error);
                })

});

router.post('/sign-in', function(req, res) {

  userController.signin(req.body)
  .then( user => {
    res.json(user);
  })
  .catch( error => {
    res.status(error.status).json(error);
  })
})

module.exports = router;
