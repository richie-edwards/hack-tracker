import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store.js';
import * as actions from '../actions/actions.js';
import challengesReducer from '../reducers/challengesReducer';
import UpNextListContainer from './UpNextListContainer.jsx';
import ChallengeListDisplay from './ChallengeListDisplay.jsx';


const mapStateToProps = state => ({
  challengeList: state.challenges.challengeList,
  lastChallengeId: state.challenges.lastMarketId
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  addChallenge: () => dispatch(actions.addChallenge()),
  deleteChallenge: (challengeId) => dispatch(actions.deleteChallenge(challengeId)),
  // editChallenge: (challengeId) => dispatch(actions.editChallenge(challengeId)),
  onchangeNewChallenge: (newChallengeInfo) => {
    return dispatch(actions.setNewChallengeInfo(newChallengeInfo))
  }

});

class ChallengeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
    }
  }

  render() {
    return (
      <div>
        {/* <Vis /> */}
        <UpNextListContainer />
        {/* <AddChallengeDisplay /> */}
        <ChallengeListDisplay
          addChallengeOnClick={this.props.addChallenge}
          addChallengeOnClick={this.props.deleteChallenge}
          challengeList={this.props.challengeList}
          id={this.props.lastChallengeId} />
      </div>
    )
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ChallengeContainer);
