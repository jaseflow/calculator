import React from 'react';

import Slider from 'react-rangeslider'

function ModalAssumptions(props) {

  return (
    <div className="Modal__card">
      <div className="Modal__content">
        <h2>Assumptions</h2>
        <div className="form__slider">
          <label htmlFor="" class="form__label form__label--range">
            How long you need your income to last?
            <strong>
              {props.deathAge}
            </strong>
          </label>
          <Slider
            min={55}
            max={110}
            tooltip={false}
            value={props.deathAge}
            onChange={(val) => props.onSetDeathAge(val)}
          />
        </div>
        <div className="form__slider">
          <label htmlFor="" class="form__label form__label--range">
            Likelihood
            <strong>
              {props.likelihood}%
            </strong>
          </label>
          <Slider
            min={50}
            max={100}
            tooltip={false}
            value={props.likelihood}
            onChange={(val) => props.onSetLikelihood(val)}
          />
        </div>
      </div>
      <footer className="Modal__footer">
        <button className="btn btn--secondary" onClick={props.onDismiss}>Done</button>
      </footer>
    </div>
  )
}

export default ModalAssumptions
