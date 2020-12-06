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
        <div onClick={() => props.onSourceRemove(i)}>
          <i className="far fa-times card__close"></i>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">Income source</label>
          <select id="" name="" className="form__input form__input--select">
            {optionsList}
            <option value="">Other</option>
          </select>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">Value today</label>
          <input type="text" value="" placeholder="Enter value" className="form__input" />
        </div>
      </div>
    )
  })

  return (
    <div>
      <h2>Other income</h2>
      <p>If you have any other sources of income please add them below.</p>
      <div className="OtherIncome__action">
        <button className="btn btn--secondary" onClick={props.onAddingIncome}>
          Add another income source <i className="far fa-plus"></i>
        </button>
      </div>
      { sources.length > 0 &&
        <div>
          <h2>{sources.length} other source{sources.length > 1 && <i>s</i>}</h2>
          {sources}
        </div>
      }
    </div>
  )
}

export default OtherIncome
