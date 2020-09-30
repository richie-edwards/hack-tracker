// require our model(s)

// create controller object
const challengeController = {};

const testStorage = { test: 'Hello from challengesController' };

// getChallenges
challengeController.getChallenges = (req, res, next) => {
  try {
    res.locals.challenges = testStorage;
  } catch (error) {
    return next({
      log: `Error in challengeController.getChallenges: ${error}`,
    });
  }
  return next();
};

// createChallenge
challengeController.createChallenge = (req, res, next) => {
  try {
    // get name, category, completed, time complexity
    console.log(req.body);
    const {
      name,
      category,
      isCompleted,
      solution,
      timeComplexity,
      source,
    } = req.body;

    testStorage[name] = {
      name,
      category,
      isCompleted,
      solution,
      timeComplexity,
      source,
    };
    res.locals.challenges = testStorage;
  } catch (error) {
    next({
      log: `Error in challengeController.createChallenge: ${error}`,
    });
  }
  return next();
};

// updateChallenge
challengeController.updateChallenge = (req, res, next) => {
  try {
    const existingName = req.params.name;
    const {
      name,
      category,
      isCompleted,
      solution,
      timeComplexity,
      source,
    } = req.body;

    testStorage[existingName] = {
      name,
      category,
      isCompleted,
      solution,
      timeComplexity,
      source,
    };
    res.locals.challenges = testStorage;
  } catch (error) {
    next({
      log: `Error in challengeController.updateChallenge: ${error}`,
    });
  }
  return next();
};

// deleteChallenge
challengeController.deleteChallenge = (req, res, next) => {
  try {
    const { name } = req.params;
    delete testStorage[name];
  } catch (error) {
    next({
      log: `Error in challengeController.deleteChallenge: ${error}`,
    });
  }
  return next();
};

// export my controller object so other files can use it
module.exports = challengeController;
