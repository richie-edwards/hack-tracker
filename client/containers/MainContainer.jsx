import React, { Component } from 'react';
import TotalsDisplay from '../components/TotalsDisplay.jsx';
import ChallengeListContainer from './ChallengeListContainer.jsx';


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
          pendingChallenges={this.props.pendingChallenges}
        />
        {/*<UpNextDisplay />
         */}
        <ChallengeListContainer />
      </div>
    );
  }
}

export default MainContainer;
