import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

// // requiring json data for use in dropdown and checkboxes
// const speciesData = require('../data/species.json');
// const planetsData = require('../data/planets.json');
// const filmsData = require('../data/films.json');

// Custom hook for handling input boxes
// saves us from creating onChange handlers for them individually
const useInput = init => {
  const [value, setValue] = useState(init);
  const onChange = e => {
    setValue(e.target.value);
  }
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
}

const AddChallenge = props => {
  const [name, nameOnChange] = useInput('');
  const [category, genderOnChange] = useInput('');
  // const [category, setCategory] = useState(categoryData[0].name);
  // const [category_id, setCategoryId] = useState(categoryData[0]._id);
  const [isCompleted, isCompletedOnChange] = useInput('');
  const [problemStatement, problemStatementOnChange] = useInput('');
  const [solution, solutionOnChange] = useInput('');
  const [timeComplexity, timeComplexityOnChange] = useInput('');
  // const [timeComplexity, setHomeworld] = useState(timeComplexity[0].name);
  // const [timeComplexity_id, setHomeworldId] = useState(timeComplexity[0]._id);
  const [source, sourceOnChange] = useInput('');
  // const [filmSet, setFilmSet] = useState({});
  const [nameError, setNameError] = useState(null);
  const [problemStatementError, setproblemStatementError] = useState(null);

  // const handleSpeciesChange = e => {
  //   const idx = e.target.value;
  //   setSpecies(speciesData[idx].name);
  //   setSpeciesId(speciesData[idx]._id);
  // }

  // const handleHomeworldChange = e => {
  //   const idx = e.target.value;
  //   setHomeworld(planetsData[idx].name);
  //   setHomeworldId(planetsData[idx]._id);
  // }

  // const handleFilmCheck = e => {
  //   const idx = e.target.value;
  //   const newFilmSet = { ...filmSet };
  //   if (newFilmSet[idx]) delete newFilmSet[idx];
  //   else newFilmSet[idx] = true;
  //   setFilmSet(newFilmSet);
  // }

  const saveChallenge = () => {
    // check if name is empty
    if (name === '') {
      setNameError('required');
      // check if height is not a number
    } else if (isNaN(height)) {
      setHeightError('must be a number');
    } else {
      // const films = [];
      // for (let idx in filmSet) {
      //   films.push({
      //     title: filmsData[idx].title,
      //     id: filmsData[idx]._id
      //   })
      // }
      const body = {
        name,
        category,
        isCompleted,
        problemStatement,
        solution,
        timeComplexity,
        source,
      }
      fetch('/challenge', {
        method: 'POST',
        headers: {
          "Content-Type": "Application/JSON"
        },
        body: JSON.stringify(body)
      })
        .then(resp => resp.json())
        .then(data => {
          props.history.push('/'); // ????
        })
        .catch(err => console.log('AddChallenge fetch /challenge: ERROR: ', err));
    }
  }

  // useEffect to clear nameError when `name` is changed
  useEffect(() => {
    setNameError(null);
  }, [name]);

  // useEffect to clear heightError when `height` is changed
  useEffect(() => {
    setproblemStatementError(null);
  }, [problemStatement]);

  const categoryOptions = categoryData.map((categoryObj, idx) => {
    return (
      <option key={idx} value={idx}>{categoryObj.name}</option>
    )
  });

  const complexityOptions = complexityData.map((complexityObj, idx) => {
    return (
      <option key={idx} value={idx}>{complexityObj.name}</option>
    )
  });

  // const filmCheckboxes = filmsData.map((filmObj, idx) => {
  //   return (
  //     <div key={idx} className="checkboxWithLabel">
  //       <input type="checkbox" className="filmCheckbox" value={idx} onChange={handleFilmCheck}></input>
  //       <span className="checkboxLabel">{filmObj.title}</span>
  //     </div>
  //   )
  // });

  return (
    <section className="mainSection createCharContainer">
      <header className="pageHeader">
        <h2>Character Creator</h2>
        <Link to="/" className="backLink">
          <button type="button" className="btnSecondary">
            Back to all characters
            </button>
        </Link>
      </header>
      <article className="card createChar">
        <h3>Enter Challenge Details</h3>

        <div className="addChallengeFields">
          <label htmlFor="name">Name: </label>
          <input name="name" placeholder="twoSum" value={name} onChange={nameOnChange} />
          {nameError ? (<span className="errorMsg">{nameError}</span>) : null}
        </div>

        <div className="addChallengeFields">
          <label htmlFor="category">Category: </label>
          <input name="category" placeholder="Recursion" value={category} onChange={categoryOnChange} />
        </div>

        <div className="addChallengeFields">
          <div className="addChallengeFields">
            <label htmlFor="isCompleted">Completed?: </label>
            <input name="isCompleted" placeholder="false" value={isCompleted} onChange={isCompletedOnChange} />
          </div>
        </div>

        <div className="addChallengeFields">
          <label htmlFor="problemStatement">Problem Statement: </label>
          <textarea name="problemStatement" id="problemStatement" cols="40" rows="20" onChange={problemStatementOnChange}></textarea>
          {/* <input name="birthYear" placeholder="19BBY" value={birth_year} onChange={birthYearOnChange} /> */}
        </div>

        <div className="addChallengeFields">
          <label htmlFor="solution">Solution: </label>
          <textarea name="solution" id="solution" cols="40" rows="20" onChange={solutionOnChange}></textarea>
        </div>

        <div className="createCharFields">
          <label htmlFor="timeComplexity">Time Complexity: </label>
          <select name="timeComplexity" onChange={handletimeComplexityChange}>
            {complexityOptions}
          </select>
        </div>

        <div className="addChallengeFields">
          <div className="addChallengeFields">
            <label htmlFor="source">Source: </label>
            <input name="source" placeholder="LeetCode" value={source} onChange={sourceOnChange} />
          </div>
        </div>



        <div className="addChallengeButtonContainer">
          <Link to="/" className="backLink">
            <button type="button" className="btnSecondary">
              Cancel
            </button>
          </Link>
          <button type="button" className="btnMain" onClick={saveChallenge}>Save</button>
        </div>
      </article>
    </section>
  )
}

export default withRouter(AddChallenge);
