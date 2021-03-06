import React, { useState } from 'react'

import NumberFormat from 'react-number-format'
import Slider from 'react-rangeslider'

const strategies = {
  1: 'Defensive',
  2: 'Stable',
  3: 'Balanced',
  4: 'Div Growth',
  5: 'Aggressive'
}

function DecisionsTabbed(props) {
  const [selected, setSelected] = useState("income")

  return (
    <div className="Tabs">
      <nav className="Tabs__nav">
        <ul className="Tabs__list">
          <li>
            <span className={`Tabs__option ${selected === 'income' ? 'Tabs__option--active' : ''}`} onClick={() => setSelected('income')}>
              <i>1</i>
              Your retirement income
            </span>
          </li>
          <li>
            <span className={`Tabs__option ${selected === 'contributions' ? 'Tabs__option--active' : ''}`} onClick={() => setSelected('contributions')}>
              <i>2</i>
              Your contributions
            </span>
          </li>
          <li>
            <span className={`Tabs__option ${selected === 'investments' ? 'Tabs__option--active' : ''}`} onClick={() => setSelected('investments')}>
              <i>3</i>
              Your LGIAsuper investment strategy
            </span>
          </li>
        </ul>
      </nav>
      <div className="Tabs__body">
        <div className={`Tabs__group ${selected === 'income' ? 'Tabs__group--active' : ''}`}>
          <div className="form__slider form__slider--flat">
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
        </div>
        <div className={`Tabs__group ${selected === 'contributions' ? 'Tabs__group--active' : ''}`}>
          <div className="form__slider" style={{marginTop: 0}}>
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
          <p className="flat">
            Want to know more about how salary sacrifice can impact your superannuation?
            <a target="_blank" href="https://super.towerswatson.com/lgiasuper/contrib.html?&_ga=2.210438869.196307440.1614055821-693481208.1606187050#/calculator/contrib/start" style={{marginLeft: '0.5rem'}}>Try our salary sacrifice calculator</a>
          </p>
        </div>
        <div className={`Tabs__group ${selected === 'investments' ? 'Tabs__group--active' : ''}`}>
          <p class="Tabs__warning">
            <i className="fa fa-exclamation-circle"></i>
            Please note that the investment strategies you choose below will be applied to your LGIAsuper as well as your partner's super.
          </p>
          <div className="form__row form__row--double">
            <div className="form__slider form__slider--flat form__slider--nolabels">
              <label htmlFor="" class="form__label form__label--range">
                <span>While you're working</span>
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
            <div className="form__slider form__slider--flat form__slider--nolabels">
              <label htmlFor="" class="form__label form__label--range">
                <span>After you've retired</span>
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
        </div>
      </div>
    </div>
  )
}

export default DecisionsTabbed
