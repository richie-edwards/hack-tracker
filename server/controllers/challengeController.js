// require our model(s)

// create controller object
const challengeController = {};

// getChallenges
challengeController.getChallenges = (req, res, next) => {
  try {
    res.locals.challenges = { test: 'Hello from challengesController' };
  } catch (error) {
    return next({
      log: `Error in challengeController.getChallenges: ${error}`,
    });
  }
  return next();
};

// createChallenge

// updateChallenge

// deleteChallenge

// export my controller object so other files can use it
module.exports = challengeController;
