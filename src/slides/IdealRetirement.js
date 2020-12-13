import React from 'react';

import 'react-rangeslider/lib/index.css'

import ContentSimple from '../components/ContentSimple'
import ContentModest from '../components/ContentModest'
import ContentComfy from '../components/ContentComfy'
import ContentPremium from '../components/ContentPremium'
import NumberFormat from 'react-number-format'

function IdealRetirement(props) {

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
      <label htmlFor={p.id} class={`Plan ${p.id === props.activePlan ? 'Plan--selected' : ''}`}>
        <input type="radio" class="Plan__input" id={p.id} value={p.id} checked={props.activePlan === p.id} onChange={() => props.onSetPlan(p.id)} />
        <div className={`Plan__circle ${p.id === props.activePlan ? 'Plan__circle--selected' : ''}`}></div>
        <div className="Plan__content">
          <strong className="Plan__name">
            {p.name}
          </strong>
          <span className="Plan__value">
            {p.id !== 'custom' &&
              <NumberFormat
                value={value}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              /> 
            }
             &nbsp;yearly income
            {props.includePartner ?
              <i className="fas fa-user-friends Plan__person"></i>
              :
              <i className="fas fa-user Plan__person"></i>
            }
          </span>
          {p.id === 'custom' &&
            <small class="Plan__value">Add your own</small>
          }
        </div>
        { p.id !== 'custom' &&
          <div className="Plan__info" onClick={() => props.onInfoClick(p.id)}>
            <i className="fal fa-info-circle"></i>
          </div>
        }
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
      <label htmlFor={p.id} class={`Plan ${p.id === props.activePlan ? 'Plan--selected' : ''}`}>
        <input type="radio" class="Plan__input" id={p.id} value={p.id} checked={props.activePlan === p.id} onChange={() => props.onSetPlan(p.id)} />
        <div className={`Plan__circle ${p.id === props.activePlan ? 'Plan__circle--selected' : ''}`}></div>
        <div className="Plan__content">
          <strong className="Plan__name">
            {p.name}
          </strong>
          <span className="Plan__value">
            {p.id !== 'custom' &&
              <NumberFormat
                value={value}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
              /> 
            }
            &nbsp;yearly income
            {props.includePartner ?
              <i className="fas fa-user-friends Plan__person"></i>
              :
              <i className="fas fa-user Plan__person"></i>
            }
          </span>
          {p.id === 'custom' &&
            <small class="Plan__value">Add your own</small>
          }
        </div>
        { p.id !== 'custom' &&
          <div className="Plan__info" onClick={() => props.onInfoClick(p.id)}>
            <i className="fal fa-info-circle"></i>
          </div>
        }
      </label>
    )
  })

  return (
    <div>
      <div>
        <p>The budgets for comfortable and modest retirement lifestyles are calculations from the
        Association of Superannuation Funds of Australia (ASFA) Retirement Standard, September
        quarter 2020.</p>
        <p>The budget for a premium retirement lifestyle is an estimate by LGIAsuper, independent to
        the ASFA Retirement Standard.</p>
        <div className="plans">
          <div className="plans__list">
            <div>
              <h3>ASFA Retirement Standard</h3>
              <div class="plans__options">
                {asfaList}
              </div>
            </div>
            <div>
              <h3>LGIAsuper Retirement Standard</h3>
              <div class="plans__options">
                {lgiaList}
              </div>
            </div>
          </div>
          <div class="plans__content">
            {
              {
                'simple': <ContentSimple income={props.simpleIncome} />,
                'modest': <ContentModest income={props.modestIncome} />,
                'comfy': <ContentComfy income={props.comfyIncome} />,
                'premium': <ContentPremium income={props.premiumIncome} />
              }[props.activePlan]
            }
          </div>
        </div>
        {props.activePlan === 'custom' &&
          <div className="IdealRetirement__custom">
            <div className="form">
              <div className="form__group">
                <label className="form__label" htmlFor="">Custom retirement income</label>
                <input type="text" value="$500,000" className="form__input form__input--suffixed" />
                <span className="form__suffix">per year</span>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default IdealRetirement
