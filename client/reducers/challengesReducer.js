/* eslint-disable no-case-declarations */
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  lastChallengeId: 100,
  totalChallenges: 0,
  totalPendingChallenges: 0,
  challengeList: [],
  pendingChallengeList: [],
  newChallengeName: '',
  newChallengeCategory: '',
  newIsCompleted: false,
  newProblemStatement: '',
  newSolution: '',
  newTimeComplexity: '',
  newSource: '',
  newReminderDateTime: '',
};

const challengesReducer = (state = initialState, action) => {
  let challengeList;
  let pendingChallengeList;

  let { totalChallenges, totalPendingChallenges, lastChallengeId } = state;

  switch (action.type) {
    case actionTypes.ADD_CHALLENGE:
      // increment total challenges and last challenge id
      totalChallenges += 1;
      lastChallengeId += 1;

      // check if challenge has a due date or
      // if it hasn't been solved
      // increment pending also in this case - Maybe????
      // *********************

      // create the new challenge object from provided data
      const {
        newChallengeName,
        newChallengeCategory,
        newIsCompleted,
        newProblemStatement,
        newSolution,
        newTimeComplexity,
        newSource,
        newReminderDateTime,
      } = state;

      const newChallenge = {
        name: newChallengeName,
        category: newChallengeCategory,
        isCompleted: newIsCompleted,
        problemStatement: newProblemStatement,
        solution: newSolution,
        timeComplexity: newTimeComplexity,
        source: newSource,
        reminderDateTime: newReminderDateTime,
      };

      // push the new market onto a copy of the market list
      challengeList = state.challengeList.slice();
      challengeList.push(newChallenge);

      // push the newChallenge if it has a due date or if isCompleted is false
      if (newChallenge.isCompleted === false || newChallenge.dueDate) {
        pendingChallengeList = state.pendingChallengeList.slice();
        pendingChallengeList.push(newChallenge);
        totalPendingChallenges += 1;
      }

      // return updated state
      return {
        challengeList,
        totalChallenges,
        pendingChallengeList,
        totalPendingChallenges,
        lastChallengeId,
        newChallengeName: '',
        newChallengeCategory: '',
        newIsCompleted: false,
        newProblemStatement: '',
        newSolution: '',
        newTimeComplexity: '',
        newSource: '',
        ...state,
      };

    case types.SET_NEW_MARKET_INFO:
      const {
        name,
        category,
        isCompleted,
        problemStatement,
        solution,
        timeComplexity,
        source,
      } = action.payload;
      return {
        ...state,
        newChallengeName: name,
        newChallengeCategory: category,
        newIsCompleted: isCompleted,
        newProblemStatement: problemStatement,
        newSolution: solution,
        newTimeComplexity: timeComplexity,
        newSource: source,
      };

    case types.ADD_CARD:
      marketList = state.marketList.slice();
      totalCards += 1;
      // let theMarket = marketList.find(({marketID}) => marketID === action.payload);
      for (let i = 0; i < marketList.length; i += 1) {
        if (marketList[i].marketID === action.payload) {
          marketList[i].cards += 1;
        }
        marketList[i].pctOfTotal = Math.round((marketList[i].cards / totalCards) * 10000) / 100;
      }
      return {
        ...state,
        marketList,
        totalCards,
      };

    case types.DELETE_CARD:
      // if cards is 0, return state
      if (totalCards < 1) {
        alert('No Cards to Delete');
        return state;
      }

      marketList = state.marketList.slice();
      totalCards -= 1;
      for (let i = 0; i < marketList.length; i += 1) {
        if (marketList[i].marketID === action.payload) {
          // return msg and original state if not enough cards
          if (marketList[i].cards === 0) {
            alert('No Cards to Delete');
            return state;
          }
          // cards reduce by 1 for market
          marketList[i].cards -= 1;
        }

        // eslint-disable-next-line max-len
        marketList[i].pctOfTotal = totalCards === 0 ? 0 : Math.round((marketList[i].cards / totalCards) * 10000) / 100;
      }
      return {
        ...state,
        marketList,
        totalCards,
      };

    default:
      return state;
  }
};

export default challengesReducer;
