// import actions types
import * as actionTypes from './actionTypes';

// Action Creators
export const setNewChallengeInfo = (newChallengeInfo) => ({
  type: actionTypes.SET_NEW_CHALLENGE_INFO,
  payload: newChallengeInfo,
});

export const addChallenge = () => ({
  type: actionTypes.ADD_CHALLENGE,
});

export const deleteChallenge = (challengeId) => ({
  type: actionTypes.DELETE_CHALLENGE,
  payload: challengeId,
});

export const addSolution = (challengeId) => ({
  type: actionTypes.ADD_SOLUTION,
  payload: challengeId,
});

export const deleteSolution = (challengeId) => ({
  type: actionTypes.DELETE_SOLUTION,
  payload: challengeId,
});

export const setReminder = (challengeId) => ({
  type: actionTypes.SET_REMINDER,
  payload: challengeId,
});

export const deleteReminder = (challengeId) => ({
  type: actionTypes.DELETE_REMINDER,
  payload: challengeId,
});
