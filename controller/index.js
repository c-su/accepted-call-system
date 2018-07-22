const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.locals.title = 'Hello World!';

  res.render('index');
});

router.get('/confirm', (req, res, next) => {
  res.render('confirmEvent');
});

router.get('/event', (req, res, next) => {
  res.locals.title = 'Hello World!';

  res.render('createEvent');
});

router.post('/event', (req, res, next) => {

  res.render('createdEvent');
});

module.exports = router;