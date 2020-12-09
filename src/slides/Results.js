import React, { useState, useEffect } from 'react';

import Pie from '../components/Pie'

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

  const [loaded, setLoaded] = useState(false)

  const optionsList = goalOptions.map((o) => {
    return (
      <option value={o.id} key={`selectoption-${o.id}`}>
        {o.text}
      </option>
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

  function handleSliderChange() {
    setLoaded(false)
    setTimeout(() => {
      setLoaded(true)
    }, 1000)
  }

  useEffect(() => {
    setLoaded(true)
  },[])

  return (
    <div className="Results">
      <div className={`Results__hero ${loaded ? 'Results__hero--loaded' : ''}`}>
        <h1 className="Results__title">
          You can retire at age <strong>66</strong> and earn <br className="show-mobile"/><strong><NumberFormat value={props.reqIncome} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </strong> per year with a 75% likelihood <br className="show-mobile"/>of your money lasting till age <strong>90</strong>.</h1>
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
        <h2 class="text-centered">Review your decisions</h2>
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
            onChangeComplete={() => handleSliderChange()}
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
            onChangeComplete={() => handleSliderChange()}
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
          />
        </div>
        { props.goals.length > 0 &&
          <div>
            <div className="Results__goals-title">
              <h2>Goals you added</h2>
              <span onClick={() => props.onOpenGoals()}></span>
            </div>
            {goals}
          </div>
        }
      </div>
    </div>
  )
}

export default Results
