import React from 'react'

import CurrencyInput from 'react-currency-input-field'

function IncomeSource(props) {
  return (
    <div className="IncomeCard card">
      <header className="card__head">
        <h3 className="card__title flat">
          <i className={`fa fa-${props.source.icon}`}></i>
          {props.source.text}
        </h3>
        <span className="link" onClick={props.onRemove}>Remove</span>
      </header>
      <div className="card__body card__body--triple">
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
        {props.source.id === 'investment' &&
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
    </div>
  )
}

export default IncomeSource
