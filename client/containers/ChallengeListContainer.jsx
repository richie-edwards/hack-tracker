import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ChallengeComponent from '../components/ChallengeComponent.jsx';

class ChallengeListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenges: [],
    }
  }

  componentDidMount() {
    // fetch the challenges by calling route
    fetch('/challenge/')
      .then(res => res.json())
      .then((challenges) => {
        return this.setState({
          challenges,
        });
      })
      .catch((error) => console.log(`Error in ChallengeListContainer.componentDidMount: ${error}`));
  }


  render() {

    const { challenges } = this.state;

    // place message if no challenges and return null
    if (!challenges) return null;
    if (challenges.length === 0) return (
      <div>No challenges yet Please add one.</div>
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
      <div>
        <h3>All Coding Challenges</h3>
        {/* <Link to={`/`}>
          <button type="button" className="btnSecondary">
            Add Challenge
          </button>
        </Link> */}

        {challengeElements}
      </div>
    )
  }
}




export default ChallengeListContainer;
