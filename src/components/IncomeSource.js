import React from 'react'

import CurrencyInput from 'react-currency-input-field'

import sources from '../resources/sources'

function IncomeSource(props) {
  const optionsList = sources.map((o) => {
    return (
      <option value={o.id} selected={o.id === props.id} key={`selectoption-${o.id}`}>
        {o.text}
      </option>
    )
  })
  return (
    <div className="IncomeCard card">
      <i className="far fa-times card__close" onClick={props.onRemove}></i>
      <div className="form__group">
        <label className="form__label" htmlFor="">Income source</label>
        <div className="form__select">
          <select id="" name="" className="form__input form__input--select">
            {optionsList}
          </select>
        </div>
      </div>
      <div className="form__group">
        <label className="form__label" htmlFor="">Value today</label>
        <CurrencyInput
          id="super"
          prefix="$"
          className="form__input"
          allowDecimals={false}
          placeholder="Enter value"
          autoFocus
          onChange={(val) => props.onSetIncomeSourceValue(val)}
        />
      </div>
      {props.id === 'investment' &&
        <div className="form__group">
          <label className="form__label" htmlFor="">Income</label>
          <div className="form__row">
            <input type="text" value=""i placeholder="Enter value" className="form__input" />
            <select id="" name="">
              <option value="weekly">per week</option>
              <option value="weekly">per month</option>
            </select>
          </div>
        </div>
      }
    </div>
  )
}

export default IncomeSource
