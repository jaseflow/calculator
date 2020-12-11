import React from 'react'

import CurrencyInput from 'react-currency-input-field'

import goals from '../resources/sources'

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
      <i className="far fa-times card__close" onClick={props.onGoalRemove}></i>
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
        <CurrencyInput
          prefix="$"
          className="form__input"
          allowDecimals={false}
          placeholder="Enter cost"
          autoFocus
          onChange={(val) => props.onSetGoalCost(val)}
        />
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
}

export default RetirementGoal
