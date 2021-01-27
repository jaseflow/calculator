import React from 'react';

import CurrencyInput from 'react-currency-input-field'

import IncomeSource from '../components/IncomeSource'

function OtherIncome(props) {

  return (
    <div>
      <h2 className="half">Other income</h2>
      <p className="double">Please let us know if you have any other assets that could potentially provide you with income once you retire.</p>
      <div className="form__group">
        <label className="form__label" htmlFor="">Do you own shares or contribute to a managed fund?</label>
        <div className="form__options">
          <label className="form__label form__label--radio flat" htmlFor="hasShares" onChange={() => props.onHasShares('yes')}>
            <input type="radio" value="yes" checked={props.hasShares === 'yes'} id="hasShares" className="form__checkbox" />
            <span>Yes</span>
          </label>
          <label className="form__label form__label--radio flat" htmlFor="noShares" onChange={() => props.onHasShares('no')}>
            <input type="radio" value="no" checked={props.hasShares === 'no'} id="noShares" className="form__checkbox" />
            <span>No</span>
          </label>
        </div>
      </div>
      { props.hasShares === 'yes' &&
        <div className="form__group double">
          <label className="form__label" htmlFor="">
            Value of your shares or managed funds
          </label>
          <CurrencyInput
            prefix="$"
            className="form__input"
            allowDecimals={false}
            placeholder="Enter today's value"
          />
        </div>
      }
      <div className="form__group">
        <label className="form__label" htmlFor="">Do you have any cash in a savings account?</label>
        <div className="form__options">
          <label className="form__label form__label--radio flat" htmlFor="hasCash" onChange={() => props.onHasCash('yes')}>
            <input type="radio" value="yes" checked={props.hasCash === 'yes'} id="hasCash" className="form__checkbox" />
            <span>Yes</span>
          </label>
          <label className="form__label form__label--radio flat" htmlFor="noCash" onChange={() => props.onHasCash('no')}>
            <input type="radio" value="no" checked={props.hasCash === 'no'} id="noCash" className="form__checkbox" />
            <span>No</span>
          </label>
        </div>
      </div>
      { props.hasCash === 'yes' &&
        <div className="form__group double">
          <label className="form__label" htmlFor="">
            Total amount of cash
          </label>
          <CurrencyInput
            prefix="$"
            className="form__input"
            allowDecimals={false}
            placeholder="Enter amount"
          />
        </div>
      }
      <div className="form__group">
        <label className="form__label" htmlFor="">Do you own an investment property?</label>
        <div className="form__options">
          <label className="form__label form__label--radio flat" htmlFor="hasProperty" onChange={() => props.onHasProperty('yes')}>
            <input type="radio" value="yes" checked={props.hasProperty === 'yes'} id="hasProperty" className="form__checkbox" />
            <span>Yes</span>
          </label>
          <label className="form__label form__label--radio flat" htmlFor="noProperty" onChange={() => props.onHasProperty('no')}>
            <input type="radio" value="no" checked={props.hasProperty === 'no'} id="noProperty" className="form__checkbox" />
            <span>No</span>
          </label>
        </div>
      </div>
      { props.hasProperty === 'yes' &&
        <div className="double">
          <div className="form__group">
            <label className="form__label" htmlFor="">
              Property value today
            </label>
            <CurrencyInput
              prefix="$"
              className="form__input"
              allowDecimals={false}
              placeholder="Enter today's value"
            />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">
              Income from property
            </label>
            <div className="form__field">
              <CurrencyInput
                prefix="$"
                className="form__input"
                allowDecimals={false}
                placeholder="Enter income"
              />
              <div className="form__select form__select--inline">
                <select id="" name="">
                  <option id="period-weekly" value="weekly">per week</option>
                  <option id="period-month" value="month">per month</option>
                  <option id="period-annual" value="annual">per year</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default OtherIncome
