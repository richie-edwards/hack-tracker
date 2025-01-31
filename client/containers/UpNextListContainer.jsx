import React, { Component } from 'react';
import ChallengeComponent from '../components/ChallengeComponent.jsx';
import Table from 'react-bootstrap/Table';

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
        <h3>Pending Coding Challenges (top 5)</h3>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Source</th>
              <th>Completed?</th>
              <th>Reminder Date</th>
              {/* <th>Problem Statement</th> */}
              {/* <th>Solution</th> */}
              {/* <th>Time Complexity</th> */}
            </tr>
          </thead>
          <tbody>
            {challengeElements}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UpNextListContainer;
