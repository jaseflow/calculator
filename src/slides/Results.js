import React from 'react';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

function Results(props) {
  return (
    <div className="Results">
      <div className="Results__hero">
      </div>
      <div className="Results__body">
        <h2>Based off of what you told us</h2>
        <div className="form__slider">
          <label htmlFor="" class="form__label form__label--range">
            <strong>{props.income}</strong>
          </label>
          <Slider
            min={50}
            max={80}
            tooltip={false}
            value={props.income}
            onChange={(val) => props.onSetIncome(val)}
          />
        </div>
      </div>
    </div>
  )
}

export default Results
