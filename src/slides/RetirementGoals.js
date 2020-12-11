import React from 'react';

import RetirementGoal from '../components/RetirementGoal'

function RetirementGoals(props) {

  const goals = props.goals.map((s, i) => {
    return (
      <RetirementGoal
        onRemove={() => props.onRemoveGoal(i)}
        onSetGoalCost={(val) => props.onSetGoalCost(val, i)}
        id={s.id}
      />
    )
  })

  return (
    <div>
      <h2>Your retirement goals</h2>
      { goals.length === 0
        ?
        <p>Add some retirement goals to help calculate how much you will need.</p>
        :
        <div className="goals">
          {goals}
        </div>
      }
      <div className="RetirementGoals__action">
        <button className="btn btn--secondary btn--iconright" onClick={props.onAddingGoal}>Add a retirement goals <i className="far fa-plus"></i></button>
      </div>
    </div>
  )
}

export default RetirementGoals
