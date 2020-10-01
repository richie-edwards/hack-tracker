import React from 'react';


// presentational component
const ChallengeComponent = ({ info }) => (
  <tr className="challengeListItem">
    {/* ** Headers to help visualize **
    <th>Name</th>
    <th>Category</th>
    <th>Source</th>
    <th>Completed?</th>
    <th>Reminder Date</th>*/}
    <td>{info.name}</td>
    <td>{info.category}</td>
    <td>{info.source}</td>
    <td>{info.isCompleted}</td>
    <td>{info.reminderDateTime}</td>
    {/* <td>{info.problemStatement}</td>
    <td>{info.solution}</td>
    <td>{info.timeComplexity}</td> */}
  </tr>
);

export default ChallengeComponent;
