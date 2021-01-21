import React from 'react'

import CurrencyInput from 'react-currency-input-field'

import goals from '../resources/goals'

function RetirementGoal(props) {
  let startRange = [];
  let endRange = [];

  const optionsList = goals.map((o) => {
    return (
      <option value={o.id} key={`selectoption-${o.id}`}>
        {o.text}
      </option>
    )
  })

  for (let i = 66; i <= props.deathAge; i++) {
    startRange.push(i)
  }

  // add a year to start age or default start age
  for (let i = props.goal.startAge + 1 || 66 + 1; i <= props.deathAge; i++) {
    endRange.push(i)
  }

  const startOptions = startRange.map((o) => {
    return (
      <option value={o} key={`startoption-${o}`}>
        Age {o}
      </option>
    )
  })

  const endOptions = endRange.map((o) => {
    return (
      <option value={o} key={`endoption-${o}`}>
        Age {o}
      </option>
    )
  })

  return (
    <div className="GoalCard">
      <header className="GoalCard__head">
        <h3 className="GoalCard__title flat">
          <i className={`fa fa-${props.goal.icon}`}></i>
          {props.goal.text}
        </h3>
        <span className="link" onClick={props.onRemove}>Remove</span>
      </header>
      <div className="GoalCard__body">
        <div className="form__group">
          <label className="form__label" htmlFor="">Cost</label>
          <CurrencyInput
            prefix="$"
            className="form__input"
            value={props.goal.cost}
            allowDecimals={false}
            placeholder="Enter cost"
            onChange={(val) => props.onSetGoalCost(val)}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">How often</label>
          <div className="form__select">
            <select id="" name="" className="form__input form__input--select" defaultValue={props.goal.frequency} onChange={(e) => props.onSetGoalFrequency(e.target.value)}>
              <option value="once">Once</option>
              <option value="annual">Annually</option>
              <option value="twoyears">Every two years</option>
              <option value="fiveyears">Every five years</option>
            </select>
          </div>
        </div>
        {props.goal.frequency !== 'once' &&
          <div className="form__group">
            <label className="form__label" htmlFor="">Start</label>
            <div className="form__select">
              <select id="" name="" className="form__input form__input--select" onChange={(e) => props.onSetGoalStartAge(e.target.value)}>
                {startOptions}
              </select>
            </div>
          </div>
        }
        {props.goal.frequency !== 'once' &&
          <div className="form__group">
            <label className="form__label" htmlFor="">Until Age</label>
            <div className="form__select">
              <select id="" name="" className="form__input form__input--select" onChange={(e) => props.onSetGoalEndAge(e.target.value)}>
                {endOptions}
              </select>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default RetirementGoal
