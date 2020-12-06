import React from 'react';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

function Results(props) {
  return (
    <div className="Results">
      <div className="Results__hero">
        <header className="Projected">
          <h2 className="Projected__title flat">Projected balance</h2>
          <p className="Projected__range">$1.3m - $1.9m</p>
        </header>
      </div>
      <div className="Results__body">
        <h2>Based off of what you told us</h2>
        <div className="form__slider">
          <label htmlFor="" class="form__label form__label--range">
            How much you need?
            <strong>{props.reqIncome}</strong>
          </label>
          <Slider
            min={150000}
            max={500000}
            tooltip={false}
            value={`${props.reqIncome} pa`}
            onChange={(val) => props.onSetIncome(val)}
          />
        </div>
      </div>
    </div>
  )
}

export default Results
