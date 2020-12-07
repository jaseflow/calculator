import React, { useRef, useEffect } from 'react';

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

  const selectedBadge = useRef(null)

  useEffect(() => {
    setTimeout(() => {
      selectedBadge.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      });
    }, 1000)
  },[])

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

  return (
    <div className="Results">
      <div className="Results__hero">
        <div className="Projected">
          <h2 className="Projected__title">Projected super balance</h2>
          <p className="Projected__range">$1.3m - $1.6m</p>
        </div>
        <div className="Badges">
          <div className="Badges__item">
            <div className="Badge Badge--warning">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">62</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
          <div className="Badges__item">
            <div className="Badge Badge--warning">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">63</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
          <div className="Badges__item">
            <div className="Badge Badge--warning">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">64</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
          <div className="Badges__item">
            <div className="Badge Badge--warning">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">65</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
          <div className="Badges__item" ref={selectedBadge}>
            <div className="Badge">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">66</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
          <div className="Badges__item">
            <div className="Badge">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">67</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
          <div className="Badges__item">
            <div className="Badge">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">68</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
          <div className="Badges__item">
            <div className="Badge">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">69</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
          <div className="Badges__item">
            <div className="Badge">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">70</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
          <div className="Badges__item">
            <div className="Badge">
              <span className="Badge__label">Retire age</span>
              <strong className="Badge__age">71</strong>
              <small className="Badge__small">72% chance of your money lasting*</small>
            </div>
          </div>
        </div>
      </div>
      <div className="Results__body">
        <h2>Based off of what you told us</h2>
        <div className="form__slider">
          <label htmlFor="" class="form__label form__label--range">
            How much you need?
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
          />
        </div>
        <div className="form__slider form__slider--labels">
          <label htmlFor="" class="form__label form__label--range">
            Investment Strategy (working)
            <strong>
              {props.workingStrategy}
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
        <div className="form__slider form__slider--labels">
          <label htmlFor="" class="form__label form__label--range">
            Investment Strategy (retired)
            <strong>
              {props.retiredStrategy}
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
