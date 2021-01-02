import React from 'react';

import Slider from 'react-rangeslider'

function ModalAssumptions(props) {

  return (
    <div className="Modal__card">
      <div className="Modal__content">
        <h2>Settings</h2>
        <p>These settings are assumptions made that help us calculate the retirement age. They use defaults which are standard for the average person.</p>
        <div className="form__slider">
          <label htmlFor="" class="form__label form__label--range">
            What age would you like your income to last to?
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
