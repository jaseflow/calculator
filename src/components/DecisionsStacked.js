import React from 'react'

import NumberFormat from 'react-number-format'
import Slider from 'react-rangeslider'

const strategies = {
  1: 'Defensive',
  2: 'Stable',
  3: 'Balanced',
  4: 'Div Growth',
  5: 'Aggressive'
}

function DecisionsStacked(props) {
  return (
    <div className="Results__decisions">
      <div className="form__slider">
        <label htmlFor="" class="form__label form__label--range">
          How much you need per year?
          <strong>
            <NumberFormat
              value={props.reqIncome}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            /> 
            <small>&nbsp;pa</small>
          </strong>
        </label>
        <Slider
          min={10000}
          max={200000}
          tooltip={false}
          value={props.reqIncome}
          onChange={(val) => props.onSetReqIncome(val)}
          onChangeComplete={() => props.onSliderRelease()}
        />
      </div>
      <div className="form__slider">
        <label htmlFor="" class="form__label form__label--range">
          How much of your take-home pay can you afford to contribute?
          <strong>
            <NumberFormat
              value={props.volContributions}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            /> 
            <small>&nbsp;month</small>
          </strong>
        </label>
      <Slider
          min={0}
          max={500}
          tooltip={false}
          value={props.volContributions}
          onChange={(val) => props.onSetVolContributions(val)}
          onChangeComplete={() => props.onSliderRelease()}
        />
      </div>
      <div className="form__slider form__slider--nolabels">
        <label htmlFor="" class="form__label form__label--range">
          <span>Investment Strategy <small class="helper">(while working)</small></span>
          <strong>
            {strategies[props.workingStrategy]}
          </strong>
        </label>
        <Slider
          min={1}
          max={5}
          labels={strategies}
          tooltip={false}
          value={props.workingStrategy}
          onChange={(val) => props.onSetWorkingStrategy(val)}
          onChangeComplete={() => props.onSliderRelease()}
        />
      </div>
      <div className="form__slider form__slider--nolabels">
        <label htmlFor="" class="form__label form__label--range">
          <span>Investment Strategy <small class="helper">(after you retire)</small></span>
          <strong>
            {strategies[props.retiredStrategy]}
          </strong>
        </label>
        <Slider
          min={1}
          max={5}
          labels={strategies}
          tooltip={false}
          value={props.retiredStrategy}
          onChange={(val) => props.onSetRetiredStrategy(val)}
          onChangeComplete={() => props.onSliderRelease()}
        />
      </div>
    </div>
  )
}

export default DecisionsStacked
