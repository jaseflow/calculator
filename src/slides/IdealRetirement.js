import React from 'react';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

function IdealRetirement(props) {

  const planOptions = props.plans.map((p) => {
    return (
      <label htmlFor={p.id} class="Plan">
        <input type="radio" class="Plan__input" id={p.id} value={p.id} checked={props.activePlan === p.id} onChange={() => props.onSetPlan(p.id)} />
        <div className={`Plan__circle ${p.id === props.activePlan ? 'Plan__circle--selected' : ''}`}></div>
        <div className="Plan__content">
          <strong className="Plan__name">{p.name}</strong>
          <small className="Plan__description">{p.description}</small>
        </div>
        { p.id !== 'custom' &&
          <div className="Plan__info" onClick={() => props.onInfoClick(p.id)}>
            <span>Read more</span>
            <i className="fal fa-info-circle"></i>
          </div>
        }
      </label>
    )
  })

  return (
    <div>
      <p>Your current combined income is $200,000 per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support.</p>
      <div>
        <h2>Your ideal retirement</h2>
        {planOptions}
        {props.activePlan === 'custom' &&
          <div className="IdealRetirement__custom">
            <div className="form">
              <div className="form__group">
                <label className="form__label" htmlFor="">Custom retirement income</label>
                <input type="text" value="$500,000" className="form__input form__input--suffixed" />
                <span className="form__suffix">per year</span>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default IdealRetirement