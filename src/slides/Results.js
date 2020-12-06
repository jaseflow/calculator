import React, { useRef, useEffect } from 'react';

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import NumberFormat from 'react-number-format'

function Results(props) {

  const selectedBadge = useRef(null)

  useEffect(() => {
    selectedBadge.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center'
    });
  },[])

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
            max={2000}
            tooltip={false}
            value={props.contributions}
            onChange={(val) => props.onSetContributions(val)}
          />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">
            Investment strategy (working)
          </label>
        </div>
      </div>
    </div>
  )
}

export default Results
