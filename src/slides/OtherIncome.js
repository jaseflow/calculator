import React, { useState  } from 'react';

function OtherIncome(props) {
  const [ incomeSources, setIncomeSources  ] = useState([])

  function handleRemove(i) {
    const newSources = incomeSources.filter((item, index) => index !== i)
    setIncomeSources(newSources)
  }

  const sources = incomeSources.map((s, i) => {
    return (
      <div className="card">
        <div onClick={() => handleRemove(i)}>
          <i className="far fa-times card__close"></i>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">Income source</label>
          <select id="" name="" class="form__input form__input--select">
            <option value="">Select source</option>
            <option value="">Shares or managed funds</option>
            <option value="">Cash</option>
            <option value="">Investment property</option>
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
      <p>If you have any other sources of income plesae add them below.</p>
      <div className="OtherIncome__action">
        <button className="btn btn--secondary" onClick={props.onAddingIncome}>
          Add another income source <i className="far fa-plus"></i>
        </button>
      </div>
      { sources.length > 0 &&
        <div>
          <h2>Income sources</h2>
          {sources}
        </div>
      }
    </div>
  )
}

export default OtherIncome
