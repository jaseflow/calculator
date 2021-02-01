import React from 'react';

import CurrencyInput from 'react-currency-input-field'

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import ContentModest from '../components/ContentModest'
import ContentComfy from '../components/ContentComfy'
import ContentPremium from '../components/ContentPremium'
import Tooltip from '../components/Tooltip'

import NumberFormat from 'react-number-format'

function IdealRetirementMobile(props) {

  const asfaOptions = props.plans.filter((p) => p.standard === 'asfa')
  const lgiaOptions = props.plans.filter((p) => p.standard === 'lgia')

  const asfaList = asfaOptions.map((p) => {
    let value;
    if (props.includePartner) {
      value = p.value && p.value.couple
    } else {
      value = p.value && p.value.single
    }
    return (
      <label htmlFor={p.id} className={`Plan ${p.id === props.activePlan ? 'Plan--selected' : ''}`} key={`plan-${p.id}`}>
        <input type="radio" className="Plan__input" id={p.id} value={p.id} checked={props.activePlan === p.id} onChange={() => props.onSetPlan(p.id)} />
        <div className={`Plan__circle ${p.id === props.activePlan ? 'Plan__circle--selected' : ''}`}></div>
        <div className="Plan__content">
          <strong className="Plan__name">
            {p.name}
          </strong>
          <span className="Plan__value">
            <NumberFormat
              value={value}
              displayType={'text'}
              thousandSeparator={true}
              step={500}
              prefix={'$'}
            />
             &nbsp;yearly income
            {props.includePartner ?
              <i className="fas fa-user-friends Plan__person"></i>
              :
              <i className="fas fa-user Plan__person"></i>
            }
          </span>
        </div>
        <div className="Plan__info" onClick={() => props.onInfoClick(p.id)}>
          <i className="fal fa-info-circle"></i>
        </div>
      </label>
    )
  })

  const lgiaList = lgiaOptions.map((p) => {
    let value;
    if (props.includePartner) {
      value = p.value && p.value.couple
    } else {
      value = p.value && p.value.single
    }
    return (
      <label htmlFor={p.id} className={`Plan ${p.id === props.activePlan ? 'Plan--selected' : ''}`} key={`plan-${p.id}`}>
        <input type="radio" className="Plan__input" id={p.id} value={p.id} checked={props.activePlan === p.id} onChange={() => props.onSetPlan(p.id)} />
        <div className={`Plan__circle ${p.id === props.activePlan ? 'Plan__circle--selected' : ''}`}></div>
        <div className="Plan__content">
          <strong className="Plan__name">
            {p.name}
          </strong>
          <span className="Plan__value">
            <NumberFormat
              value={value}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'$'}
            />
            &nbsp;yearly income
            {props.includePartner ?
              <i className="fas fa-user-friends Plan__person"></i>
              :
              <i className="fas fa-user Plan__person"></i>
            }
          </span>
        </div>
        <div className="Plan__info" onClick={() => props.onInfoClick(p.id)}>
          <i className="fal fa-info-circle"></i>
        </div>
      </label>
    )
  })

  return (
    <div>
      <div>
        <p>Your current income is <NumberFormat value={props.income} prefix={'$'} thousandSeparator={true} displayType={'text'}/> per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support.</p>
        <div className="form__slider form__slider--pressed">
          <label htmlFor="" class="form__label form__label--range">
            How long do you need your money to last?
            <strong className="age-counter">
              {props.deathAge} <small>years old</small>
            </strong>
          </label>
          <Slider
            min={60}
            max={100}
            tooltip={false}
            value={props.deathAge}
            onChange={(val) => props.onSetDeathAge(val)}
          />
        </div>
        <h2>Choose your income</h2>
        <div className="plans">
          <div className="plans__list">
            <div>
              <div className="plans__header">
                <h3 className="flat">
                  ASFA Retirement Standard
                </h3>
                <Tooltip>
                  <p>The budgets for comfortable and modest retirement lifestyles are calculations from the Association of Superannuation Funds of Australia (ASFA) Retirement Standard, September quarter 2020.</p>
                </Tooltip>
              </div>
              <div className="plans__options">
                {asfaList}
              </div>
            </div>
            <div>
              <div className="plans__header">
                <h3 className="flat">
                  LGIAsuper Retirement Standard
                </h3>
                <Tooltip>
                  <p>The budget for a premium retirement lifestyle is an estimate by LGIAsuper, independent to the ASFA Retirement Standard.</p>
                </Tooltip>
              </div>
              <div className="plans__options">
                {lgiaList}
              </div>
            </div>
            <div>
              <div className="plans__header">
                <h3 className="flat">
                  Set your own income
                </h3>
              </div>
              <div className="plans__options">
                <label htmlFor='custom' className={`Plan ${props.activePlan === 'custom' ? 'Plan--selected' : ''}`}>
                  <input type="radio" className="Plan__input" id='custom' value='custom' checked={props.activePlan === 'custom'} onChange={() => props.onSetPlan('custom')} />
                  <div className={`Plan__circle ${props.activePlan === 'custom' ? 'Plan__circle--selected' : ''}`}></div>
                  <div className="Plan__content">
                    <strong className="Plan__name">
                      Custom
                    </strong>
                    <span className="Plan__value">
                      Set your own income
                      {props.includePartner ?
                        <i className="fas fa-user-friends Plan__person"></i>
                        :
                        <i className="fas fa-user Plan__person"></i>
                      }
                    </span>
                  </div>
                </label>
              </div>
            </div>
            {props.activePlan === 'custom' && 
              <div className="form__group">
                <label className="form__label" htmlFor="super">How much will you need?</label>
                <CurrencyInput
                  id="custom-income"
                  prefix="$"
                  className="form__input form__input--prefilled form__input--suffixed"
                  allowDecimals={false}
                  placeholder="Enter amount"
                  onChange={(val) => props.onSetCustomIncome(val)}
                />
                <span className="form__suffix">per annum</span>
              </div>
            }
          </div>
          <div className="plans__content">
            {
              {
                'modest': <ContentModest income={props.modestIncome} />,
                'comfy': <ContentComfy income={props.comfyIncome} />,
                'premium': <ContentPremium income={props.premiumIncome} />
              }[props.activePlan]
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdealRetirementMobile
