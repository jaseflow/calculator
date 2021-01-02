import React from 'react';

import CurrencyInput from 'react-currency-input-field'

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
          <small className="Plan__value">Add your own</small>
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
          <small className="Plan__value">Add your own</small>
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
        <p>Your current income is <NumberFormat value={props.income} displayType={'text'} thousandSeperator={true} prefix={'$'} /> per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support.</p>
        <h2>Standard retirement incomes</h2>
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
        <h2>Set our own income</h2>
        <div className="IdealRetirementMobile__custom">
          <div className="form">
            <div className="form__group">
              <label className="form__label" htmlFor="">Custom retirement income</label>
              <CurrencyInput
                prefix="$"
                className="form__input form__input--suffixed"
                placeholder="Enter amount"
                value={props.reqIncome}
                allowDecimals={false}
                onChange={(val) => props.onSetCustomIncome(val)}
              />
              <span className="form__suffix">per year</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IdealRetirementMobile
