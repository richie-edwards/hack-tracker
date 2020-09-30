const express = require('express');

const router = express.Router();
const challengeController = require('../controllers/challengeController');

router.get('/',
  challengeController.getChallenges,
  (req, res) => res.status(200).json(res.locals.challenges));

router.post('/',
  challengeController.createChallenge,
  (req, res) => res.status(200).json(res.locals.challenges));

router.put('/:name',
  challengeController.updateChallenge,
  (req, res) => res.status(200).json(res.locals.challenges));

router.delete('/:name',
  challengeController.deleteChallenge,
  (req, res) => res.status(200).json(res.locals.challenges));

// ??? explain why
module.exports = router;
