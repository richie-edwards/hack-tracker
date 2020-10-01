// require our model(s)

// create controller object
const challengeController = {};

const testStorage = [{
  name: 'twoSum',
  category: 'Array',
  isCompleted: true,
  problemStatement: `Given an array of numbers and a target number,
  return true if two of the numbers in the array add up to the target.
  Otherwise, return false.

  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time? 

  Example:

  const nums = [2, 5, 11, 15]
  twoSum(num, 7) -> true
  Rational:  nums[0] + nums[1] = 2 + 5 = 7,

  twoSum(nums, 9) -> false
  Rational: No elements inside the array sum up to the target number`,
  solution: `const twoSum = (arr, target) => {
    // input: array of numbers and a target number
    // output: true if two of the numbers in the array add up to the target. Otherwise, return false.
  
    // create an object to store the numbers we've seen
    const seenNums = {};
    // iterate through the input array
    for (let index = 0; index < arr.length; index += 1) {
      const currentNum = arr[index];
      // check if there is a partner in the object for the current number that would add up to target
      // if there is, return true.
      if (Object.prototype.hasOwnProperty.call(seenNums, target - currentNum)) return true;
      // Else, add the number to the object.
      seenNums[currentNum] = true;
    }
    // return false at the end, representing we did not find a pair of numbers that sumed to target.
    return false;
  }`,
  timeComplexity: 'Linear',
  source: 'Hack-Hour',
  reminderDateTime: null,
},
{
  name: 'max-depth',
  category: 'Recursion',
  isCompleted: false,
  problemStatement: `Given an arbitrarily nested array of arrays, return the maximum depth.

  For example:
  
  maxDepth([3, 2]) -> 1 (non-nested array, so maximum depth is 1 level)
  maxDepth([7, 8, 0, 9]) -> 1 (non-nested array, so maximum depth is 1 level)
  maxDepth([]) -> 1 (array may be empty)
  
  maxDepth([3, [6, 7], 2]) -> 2 (maximum depth is 2 levels)
  maxDepth([[2, 1], 8, 3, [4], 5]) -> 2 (maximum depth is 2 levels)
  maxDepth([3, [], 2]) -> 2 (inner arrays may be empty, but still count towards depth)
  maxDepth([3, [6, [7]], 2]) -> 3 (maximum depth is 3 levels)
  maxDepth([4, [0, [[3], 2]], 2, 7, 8, [1]]) -> 4 (maximum depth is 4 levels)`,
  solution: '',
  timeComplexity: '',
  source: 'Hack-Hour',
  reminderDateTime: '9/30/2020 11:45pm',
},
];

// getChallenges
challengeController.getChallenges = (req, res, next) => {
  try {
    if (req.query && req.query.limit) {
      // only take this many from testStorage
      res.locals.challenges = testStorage.slice(0, req.query.limit);
    } else {
      res.locals.challenges = testStorage;
    }
  } catch (error) {
    return next({
      log: `Error in challengeController.getChallenges: ${error}`,
    });
  }
  return next();
};

// get up next challenges (not completed)
challengeController.getUpNextChallenges = (req, res, next) => {
  try {
    // res.locals.challenges = testStorage[0];
    let first;
    let rest;
    [first, ...rest] = testStorage;
    res.locals.challenges = first;
  } catch (error) {
    return next({
      log: `Error in challengeController.getUpNextChallenges: ${error}`,
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
      problemStatement,
      solution,
      timeComplexity,
      source,
      reminderDate,
    } = req.body;

    testStorage[name] = {
      name,
      category,
      isCompleted,
      problemStatement,
      solution,
      timeComplexity,
      source,
      reminderDate,
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
