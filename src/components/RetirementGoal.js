import React from 'react'

import CurrencyInput from 'react-currency-input-field'

import goals from '../resources/goals'

function RetirementGoal(props) {
  const optionsList = goals.map((o) => {
    return (
      <option value={o.id} key={`selectoption-${o.id}`}>
        {o.text}
      </option>
    )
  })

  return (
    <div className="GoalCard card">
      <i className="far fa-times card__close" onClick={props.onRemove}></i>
      <div className="form__group">
        <label className="form__label" htmlFor="">Goal</label>
        <div className="form__select">
          <select id="" name="" defaultValue={props.id} onChange={(e) => props.onSetGoalId(e.target.value)} className="form__input form__input--select">
            {optionsList}
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="">Cost</label>
        <CurrencyInput
          prefix="$"
          className="form__input"
          value={props.cost}
          allowDecimals={false}
          placeholder="Enter cost"
          onChange={(val) => props.onSetGoalCost(val)}
        />
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="">How often</label>
        <div className="form__select">
          <select id="" name="" className="form__input form__input--select" defaultValue={props.frequency} onChange={(e) => props.onSetGoalFrequency(e.target.value)}>
            <option value="once">Once</option>
            <option value="annual">Annually</option>
            <option value="twoyears">Every two years</option>
            <option value="fiveyears">Every five years</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default RetirementGoal
