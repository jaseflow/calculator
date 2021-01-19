import React from 'react';

import Pie from '../components/Pie'

import consolidateImg from '../consolidate.png'
import consolidateBadge from '../consolidate-badge.png'
import singleImg from '../single.png'
import superHealthCheckImg from '../superhealthcheck.png'
import comprehensiveImg from '../comprehensive.png'
import referImg from '../refer-white.png'
import printImg from '../form.svg'

import IncomeSource from '../components/IncomeSource'
import RetirementGoal from '../components/RetirementGoal'

import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

import NumberFormat from 'react-number-format'

const strategies = {
  1: 'Defensive',
  2: 'Stable',
  3: 'Balanced',
  4: 'Div Growth',
  5: 'Aggressive'
}

function Results(props) {

  const sources = props.incomeSources.map((s, i) => {
    return (
      <IncomeSource
        key={`income-${s.id}`}
        value={s.value}
        income={s.income}
        period={s.period}
        onRemove={() => props.onRemoveIncome(i)}
        onSetIncomeSourceValue={(val) => props.onSetIncomeSourceValue(val, i)}
        onSetIncomeSourcePeriod={(val) => props.onSetIncomeSourcePeriod(val, i)}
        onSetIncomeSourceIncome={(val) => props.onSetIncomeSourceIncome(val, i)}
        id={s.id}
      />
    )
  })

  const goals = props.goals.map((s, i) => {
    return (
      <RetirementGoal
        key={`goal-${s.id}`}
        onRemove={() => props.onRemoveGoal(i)}
        onSetGoalFrequency={(val) => props.onSetGoalCost(val, i)}
        onSetGoalId={(val) => props.onSetGoalId(val, i)}
        onSetGoalCost={(val) => props.onSetGoalCost(val, i)}
        id={s.id}
        cost={s.cost}
        frequency={s.frequency}
      />
    )
  })

  return (
    <div className={`Results ${props.loaded ? 'Results--loaded' : ''}`}>
      <div className="Results__hero">
        <h1 className="Results__title desktop-title">
          When can you retire?
        </h1>
        <div className="Results__age">
          <div className="Results__copy">
            <span>Retire at</span>
            <strong>66</strong>
            <small>High likelihood of your money lasting</small>
          </div>
          <div className="Results__age-bg"></div>
          <div className="Results__pie">
            <Pie stroke={20} radius={120} progress={props.likelihood} />
          </div>
        </div>
      </div>
      <div className="Results__body">
        <div className="container">
          <p className="Results__blurb">You can retire at age <strong>66</strong> and spend <br /><strong><NumberFormat value={props.reqIncome} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </strong> per year with a high likelihood <br/>of your money lasting till age <strong>{props.deathAge}</strong>.</p>
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
                Extra contributions
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
          <div hidden>
            <hr className="Results__hr" />
            <section className="Results__section">
              <div className="Results__goals-title">
                <h2>Income sources</h2>
                <span className="link" onClick={() => props.onOpenModal('income')}>Add income</span>
              </div>
              {sources.length ?
                sources
                :
                <p>No other income sources added</p>
              }
            </section>
          </div>
          <section className="Results__section">
            <div className="Results__goals-title">
              <h2>Goals you added</h2>
              <span className="link" onClick={() => props.onOpenModal('goals')}>Add a goal</span>
            </div>
            {goals.length ?
              goals
              :
              <p className="flat">No retirement goals added</p>
            }
          </section>
        </div>
      </div>
      { props.canConsolidate ?
        <div class="Results__consolidate">
          <div className="container">
            <img src={consolidateBadge} alt="" class="show-desktop" />
            <div>
              <h1 className="desktop-title">Consolidate today</h1>
              <p>By consolidating all your superannuation into your one account, you could save thousands of dollars in administration fees over your working life. This is money that could be growing for your retirement.</p>
              <a href="#" class="btn btn--large Results__cta">Get started</a>
            </div>
          </div>
        </div>
        :
        null
      }
      <div className="Results__footer">
        <div className="container">
          <div className="Results__actions">
            <div>
              <h1 class="desktop-title">Book financial advice</h1>
              <div className="Results__block">
                <img src={superHealthCheckImg} alt="" />
                <div class="Results__wrap">
                  <h2 className="flat">Super Health Checks</h2>
                  <p>Covers broad recommendations that do not take into account your personal circumstances.</p>
                  <a href="https://www.lgiasuper.com.au/superannuation/super-health-check" class="btn btn--tertiary Results__action">
                    Book now
                  </a>
                </div>
              </div>
              <div className="Results__block">
                <img src={singleImg} />
                <div class="Results__wrap">
                  <h2 className="flat">Single issue advice</h2>
                  <p>Covers personal advice restricted to limited topics, such as salary sacrificing and investment switching.</p>
                  <a href="https://memberonline.lgiasuper.com.au/find-my-super/declaration-and-consent" class="btn btn--tertiary Results__action">
                    Book now
                  </a>
                </div>
              </div>
            </div>
            <div className="Results__refer">
              <img src={referImg} alt="" />
              <div class="Results__wrap">
                <h2 className="flat">Special offer to members</h2>
                <p>Invite family and friends to join and you could pocket up to $400 in vouchers and they could receive a $150 voucher.</p>
                <a href="" class="btn btn--block Results__action">
                  Refer now
                </a>
              </div>
            </div>
          </div>
          <div className="Results__block Results__block--divided">
            <div class="Results__wrap">
              <h2 className="flat">Generate your report</h2>
              <p>Email a detailed PDF report of your projection to use as reference or to share with your partner or financial advisor.</p>
              <div className="form">
                <div className="form__submit">
                  <input type="text" class="form__input" placeholder="Enter an email address" />
                  <button className="btn form__action">Send</button>
                </div>
                <p style={{ marginTop: '0.5rem' }}>Want to save a copy instead? <a href="#" class="Results__link">Download PDF</a></p>
              </div>
            </div>
          </div>
          <footer class="Results__legal text-centered">
            <nav>
              <a target="_blank" rel="noreferrer" href="https://www.lgiasuper.com.au/about-us/governance/reports-and-policies/disclaimer">
                Disclaimer
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.lgiasuper.com.au/about-us/contact-us">
                Contact
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.lgiasuper.com.au/about-us/governance">
                Governance
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.lgiasuper.com.au/about-us/governance/reports-and-policies/privacy">
                Privacy
              </a>
              <a target="_blank" rel="noreferrer" href="https://www.lgiasuper.com.au/about-us/site-map">
                Site map
              </a>
            </nav>
            <p>
              <small>LGIAsuper Trustee ABN 94 085 088 484</small>
              <small>AFS Licence No. 230511</small>
              <small>LGIAsuper ABN 23 053 121 564</small>
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Results
