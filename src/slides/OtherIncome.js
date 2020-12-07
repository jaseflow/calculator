import React, { useState  } from 'react';

const options = [
  {
    id: 'shares',
    text: 'Shares or managed funds',
    icon: 'chart-line'
  },
  {
    id: 'cash',
    text: 'Cash',
    icon: 'dollar'
  },
  {
    id: 'investment',
    text: 'Investment property',
    icon: 'house'
  }
]

function OtherIncome(props) {

  const optionsList = options.map((o) => {
    return (
      <option value={o.id} key={`selectoption-${o.id}`}>
        {o.text}
      </option>
    )
  })

  const sources = props.incomeSources.map((s, i) => {
    return (
      <div className="IncomeCard card">
        <i className="far fa-times card__close" onClick={() => props.onSourceRemove(i)}></i>
        <div className="form__group">
          <label className="form__label" htmlFor="">Income source</label>
          <div className="form__select">
            <select id="" name="" className="form__input form__input--select" autofocus>
              {optionsList}
            </select>
          </div>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">Value today</label>
          <input type="text" value=""i placeholder="Enter value" className="form__input" />
        </div>
        {s.id === 'investment' &&
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
  })

  return (
    <div>
      <h2>Other income</h2>
      { sources.length === 0 ?
        <p>If you have any other sources of income please add them below.</p>
        :
        <div className="sources">
          {sources}
        </div>
      }
      <div className="OtherIncome__action">
        <button className="btn btn--secondary" onClick={() => props.onAddingIncome(options[0])}>
          Add another income source <i className="far fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default OtherIncome
