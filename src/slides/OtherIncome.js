import React, { useState  } from 'react';

function OtherIncome() {
  const [ incomeSources, setIncomeSources  ] = useState([])

  const handleRemove = (e) => {
    const id = e.target.getAttribute('id')
    setIncomeSources(incomeSources.filter(item => item.id !== id))
  }

  const sources = incomeSources.map((s, i) => {
    return (
      <div className="card">
        <i className="far fa-times card__close" onClick={handleRemove}></i>
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

  function handleAdd() {
    const source = {
      type: undefined,
      value: undefined,
      id: incomeSources.length + 1
    }
    setIncomeSources(incomeSources => [...incomeSources, source])
  }

  return (
    <div>
      <h2>Other income</h2>
      <p>If you have any other sources of income plesae add them below.</p>
      <div className="OtherIncome__action">
        <button className="btn btn--secondary" onClick={handleAdd}>
          Add another income source <i className="far fa-plus"></i>
        </button>
      </div>
      {sources}
    </div>
  )
}

export default OtherIncome
