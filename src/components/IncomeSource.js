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
        <label className="form__label" htmlFor="incomeValue">Value today</label>
        <CurrencyInput
          id="incomeValue"
          prefix="$"
          value={props.value}
          className="form__input"
          allowDecimals={false}
          placeholder="Enter value"
          onChange={(val) => props.onSetIncomeSourceValue(val)}
        />
      </div>
      {props.id === 'investment' &&
        <div className="form__group">
          <label className="form__label" htmlFor="incomeIncome">Income</label>
          <div className="form__field">
            <CurrencyInput
              id="incomeIncome"
              value={props.income}
              prefix="$"
              className="form__input"
              allowDecimals={false}
              placeholder="Enter income"
              onChange={(val) => props.onSetIncomeSourceIncome(val)}
            />
            <div className="form__select form__select--inline">
              <select id="" name="" onChange={(e) => props.onSetIncomeSourcePeriod(e.target.value)}>
                <option id="period-weekly" value="weekly" selected={props.period === 'weekly'} >per week</option>
                <option id="period-month" value="month" selected={props.period === 'month'}>per month</option>
                <option id="period-annual" value="annual" selected={props.period === 'annual'}>per year</option>
              </select>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default IncomeSource
