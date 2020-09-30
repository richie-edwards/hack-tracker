import React from 'react';

// presentational component
const TotalsDisplay = (props) => (
  <div id="totalsDisplay">
    <label htmlFor="totalChallenges">Total Challenges: </label>
    <span id="totalChallenges">{props.totalChallenges}</span>
    <p>
      <label htmlFor="pendingChallenges">Pending Challenges: </label>
      <span id="pendingChallenges">{props.pendingChallenges}</span>
    </p>
    <p>
      <label htmlFor="percentComplete">%: </label>
      <span id="percentComplete">{75}</span>
    </p>
  </div>

);



export default TotalsDisplay;
