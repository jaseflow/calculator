import React, { useState  } from 'react';

function RetirementGoals(props) {
  return (
    <div>
      <h2>Your retirement goals</h2>
      <p>Add some retirement goals to help calculate how much you will need.</p>
      <button className="btn btn--secondary" onClick={props.onAddingGoal}>Add a retirement goals <i className="far fa-plus"></i></button>
    </div>
  )
}

export default RetirementGoals
