import React, { Component } from 'react';
import { connect } from 'react-redux';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import ChallengeListContainer from './ChallengeListContainer.jsx';
import UpNextListContainer from './UpNextListContainer.jsx';


const mapStateToProps = state => ({
  totalChallenges: state.challenges.totalChallenges,
  totalPendingChallenges: state.challenges.totalPendingChallenges,
});

const mapDispatchToProps = dispatch => ({

});

class MainContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <h1>My App Heading!</h1>
        <TotalsDisplay
          totalChallenges={this.props.totalChallenges} // ?????
          pendingChallenges={this.props.totalPendingChallenges}
        />
        <UpNextListContainer />
        <ChallengeListContainer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
