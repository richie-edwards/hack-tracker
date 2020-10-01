import React, { Component } from 'react';
import ChallengeComponent from '../components/ChallengeComponent.jsx';
import Table from 'react-bootstrap/Table';


class ChallengeListDisplay extends Component {
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
        console.log(challenges);
        return this.setState({
          challenges,
        });
      })
      .catch((error) => console.log(`Error in ChallengeContainer.componentDidMount: ${error}`));
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
          addCardOnClick={this.props.addCardOnClick}
          deleteCardOnClick={this.props.deleteCardOnClick}
        />
      );
    });

    return (
      <div>
        <div className="tableHeadingWithButton">
          <h3>All Coding Challenges</h3>
          <button>+</button>
        </div>
        <Table striped bordered hover responsive>
          {/* TODO: DRY! Same thead in UpNextListContainer */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Source</th>
              <th>Completed?</th>
              <th>Reminder Date</th>
              {/* <th>Problem Statement</th>
              <th>Solution</th>
              <th>Time Complexity</th> */}
            </tr>
          </thead>
          <tbody>
            {challengeElements}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default ChallengeListDisplay;
