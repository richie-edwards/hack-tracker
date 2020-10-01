import React, { Component } from 'react';
import ChallengeComponent from '../components/ChallengeComponent.jsx';

class UpNextListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
    }
  }

  componentDidMount() {
    // fetch the challenges by calling route
    fetch('/challenge/?limit=1')
      .then(res => res.json())
      .then((challenges) => {
        return this.setState({
          challenges,
        });
      })
      .catch((error) => console.log(`Error in UpNextListContainer.componentDidMount: ${error}`));
  }

  render() {
    const { challenges } = this.state;

    // place message if no challenges and return null
    if (!challenges) return null;
    if (challenges.length === 0) return (
      <div>No challenges to review at this time.</div>
    );

    // create array of challenges components
    const challengeElements = challenges.map((challenge, index) => {
      return (
        <ChallengeComponent
          key={index}
          info={challenge}
        />
      );
    });

    return (
      <div id="upNextContainer">
        <ul>
          {challengeElements}
        </ul>
      </div>
    );
  }
}

export default UpNextListContainer;
