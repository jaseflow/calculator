import React from 'react';

import Pie from '../components/Pie'

import IncomeSource from '../components/IncomeSource'

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import NumberFormat from 'react-number-format'

const goalOptions = [
  {
    id: 'holiday',
    text: 'Holiday',
    icon: 'plane-departure'
  },
  {
    id: 'inheritance',
    text: 'Inheritance',
    icon: 'sack-dollar'
  },
  {
    id: 'medical',
    text: 'Medical expense',
    icon: 'users-medical'
  },
  {
    id: 'car',
    text: 'New car',
    icon: 'car'
  },
  {
    id: 'house',
    text: "Kid's house deposit",
    icon: 'house'
  },
  {
    id: 'gift',
    text: 'Gift',
    icon: 'gift'
  }
]

const strategies = {
  1: 'Defensive',
  2: 'Stable',
  3: 'Balanced',
  4: 'Div Growth',
  5: 'Aggressive'
}

function Results(props) {

  const optionsList = goalOptions.map((o) => {
    return (
      <option value={o.id} key={`selectoption-${o.id}`}>
        {o.text}
      </option>
    )
  })

  const sources = props.incomeSources.map((s, i) => {
    return (
      <IncomeSource
        onRemove={() => props.onRemoveIncome(i)}
        onSetIncomeSourceValue={(val) => props.onSetIncomeSourceValue(val, i)}
        id={s.id}
      />
    )
  })

  const goals = props.goals.map((s, i) => {
    return (
      <div className="GoalCard card">
        <i className="far fa-times card__close" onClick={() => props.onGoalRemove(i)}></i>
        <div className="form__group">
          <label className="form__label" htmlFor="">Income source</label>
          <div className="form__select">
            <select id="" name="" className="form__input form__input--select">
              {optionsList}
              <option value="">Other</option>
            </select>
          </div>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">Cost</label>
          <input type="text" value=""i placeholder="Enter value" className="form__input" />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">How often</label>
          <div className="form__select">
            <select id="" name="" className="form__input form__input--select">
              <option value="">Once</option>
              <option value="">Annually</option>
              <option value="">Every two years</option>
              <option value="">Every five years</option>
            </select>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className={`Results ${props.loaded ? 'Results--loaded' : ''}`}>
      <div className="Results__hero">
        <h1 className="Results__title">
          When can you retire?
        </h1>
        <div className="Results__age">
          <div className="Results__copy">
            <span>Retire at</span>
            <strong>66</strong>
            <small>{props.progress}% chance of your money lasting</small>
          </div>
          <div className="Results__age-bg"></div>
          <div className="Results__pie">
            <Pie stroke={20} radius={120} progress={props.progress} />
          </div>
        </div>
      </div>
      <div className="Results__body">
        <div className="container">
          <p className="Results__blurb">You can retire at age <strong>66</strong> and earn <br /><strong><NumberFormat value={props.reqIncome} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </strong> per year with a 75% likelihood <br/>of your money lasting till age <strong>90</strong>.</p>
          <hr className="Results__hr" />
          <h2>Review your decisions</h2>
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
                  &nbsp;pa
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
                Extra contributions
                <strong>
                  <NumberFormat
                    value={props.contributions}
                    displayType={'text'}
                    thousandSeparator={true}
                    prefix={'$'}
                  /> 
                  &nbsp;month
                </strong>
              </label>
              <Slider
                min={0}
                max={500}
                tooltip={false}
                value={props.contributions}
                onChange={(val) => props.onSetContributions(val)}
                onChangeComplete={() => props.onSliderRelease()}
              />
            </div>
            <div className="form__slider form__slider--nolabels">
              <label htmlFor="" class="form__label form__label--range">
                Investment Strategy (working)
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
                Investment Strategy (retired)
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
          <hr className="Results__hr" />
          <section className="Results__section">
            <div className="Results__goals-title">
              <h2>Income sources</h2>
              <span className="Results__add-link" onClick={() => props.onOpenModal('income')}>Add income</span>
            </div>
            {sources.length ?
              sources
              :
              <p>No other income sources added</p>
            }
          </section>
          <hr className="Results__hr" />
          <section className="Results__section">
            <div className="Results__goals-title">
              <h2>Goals you added</h2>
              <span className="Results__add-link" onClick={() => props.onOpenModal('goals')}>Add goals</span>
            </div>
            {goals.length ?
              goals
              :
              <p>No retirement goals added</p>
            }
          </section>
        </div>
      </div>
      <div className="Results__footer">
        <div className="container">
          <div className="Results__actions">
            <div className="Results__block">
              <h2>Get financial advice</h2>
              <p>Talk to one of our experienced financial advisers about designing a financial strategy.</p>
              <a href="#" class="btn btn--block"> Schedule an appointment</a>
            </div>
            <div className="Results__block">
              <h2>Print a report</h2>
              <p>Generate a detailed report of your projection to use as reference at your next financial discussion.</p>
              <a href="#" class="btn btn--secondary">Save as PDF</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
