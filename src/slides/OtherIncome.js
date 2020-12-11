import React from 'react';

import IncomeSource from '../components/IncomeSource'

function OtherIncome(props) {

  const sources = props.incomeSources.map((s, i) => {
    return (
      <IncomeSource
        onRemove={() => props.onRemoveIncome(i)}
        onSetIncomeSourceValue={(val) => props.onSetIncomeSourceValue(val, i)}
        id={s.id}
      />
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
        <button className="btn btn--secondary btn--iconright" onClick={() => props.onAddIncome()}>
          Add another income source <i className="far fa-plus"></i>
        </button>
      </div>
    </div>
  )
}

export default OtherIncome
