import React from 'react';

const goalOptions = [
  {
    id: 'holiday',
    text: 'Holiday',
    icon: 'plane-departure'
  },
  {
    id: 'inheritance',
    text: 'Inheritance',
    icon: 'sack-dollar'
  },
  {
    id: 'medical',
    text: 'Medical expense',
    icon: 'users-medical'
  },
  {
    id: 'car',
    text: 'New car',
    icon: 'car'
  },
  {
    id: 'house',
    text: "Kid's house deposit",
    icon: 'house'
  },
  {
    id: 'gift',
    text: 'Gift',
    icon: 'gift'
  }
]

function RetirementGoals(props) {

  const optionsList = goalOptions.map((o) => {
    return (
      <option value={o.id} key={`selectoption-${o.id}`}>
        {o.text}
      </option>
    )
  })

  const sources = props.goals.map((s, i) => {
    return (
      <div className="GoalCard card">
        <i className="far fa-times card__close" onClick={() => props.onGoalRemove(i)}></i>
        <div className="form__group">
          <label className="form__label" htmlFor="">Income source</label>
          <div className="form__select">
            <select id="" name="" className="form__input form__input--select">
              {optionsList}
              <option value="">Other</option>
            </select>
          </div>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">Cost</label>
          <input type="text" value=""i placeholder="Enter value" className="form__input" />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">How often</label>
          <div className="form__select">
            <select id="" name="" className="form__input form__input--select">
              <option value="">Once</option>
              <option value="">Annually</option>
              <option value="">Every two years</option>
              <option value="">Every five years</option>
            </select>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div>
      <h2>Your retirement goals</h2>
      <p>Add some retirement goals to help calculate how much you will need.</p>
      <div className="RetirementGoals__action">
        <button className="btn btn--secondary" onClick={props.onAddingGoal}>Add a retirement goals <i className="far fa-plus"></i></button>
      </div>
      { sources.length > 0 &&
        <div>
          <h3>{sources.length} other source{sources.length > 1 && <i>s</i>}</h3>
          <div className="sources">
            {sources}
          </div>
        </div>
      }
    </div>
  )
}

export default RetirementGoals
