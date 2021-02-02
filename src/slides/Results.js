import React, { useEffect, useState } from "react";

import Pie from '../components/Pie'

import consolidateImg from '../consolidate.png'
import consolidateBadge from '../consolidate-badge.png'
import singleImg from '../single.png'
import superHealthCheckImg from '../superhealthcheck.png'
import comprehensiveImg from '../comprehensive.png'
import referImg from '../refer-white.png'
import printImg from '../form.svg'
import reportImg from '../report.png'

import IncomeSource from '../components/IncomeSource'
import RetirementGoal from '../components/RetirementGoal'
import DecisionsStacked from '../components/DecisionsStacked'
import DecisionsTabbed from '../components/DecisionsTabbed'

import NumberFormat from 'react-number-format'
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'

function Results(props) {

  const [likelihoodLabel, setLikelihoodLabel] = useState('')
  const [fillPercentage, setFillPercentage] = useState(60)

  useEffect(() => {
    switch(props.likelihood) {
      case 'moderate':
          setLikelihoodLabel("moderate")
          setFillPercentage(60)
          break
      case 'high':
          setLikelihoodLabel("high")
          setFillPercentage(80)
          break
      case 'very-high':
          setLikelihoodLabel("very high")
          setFillPercentage(90)
          break
    }
  },[props.likelihood])

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
        onSetGoalStartAge={(val) => props.onSetGoalStartAge(val, i)}
        deathAge={props.deathAge}
        goal={s}
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
            <Pie stroke={20} radius={120} progress={fillPercentage} />
          </div>
        </div>
      </div>
      <div className="Results__body">
        <div className="container">
          <p className="Results__blurb">You can retire at age <strong>66</strong> and spend <br /><strong><NumberFormat value={props.reqIncome} displayType={'text'} thousandSeparator={true} prefix={'$'} /> </strong> per year <span hidden={props.goals.length ? false : true}>while achieving your <strong>{props.goals.length} goal<i hidden={props.goals.length > 1 ? false : true}>s</i></strong></span> with a <span className="Results__settings" onClick={() => props.onOpenModal('assumptions')}>{likelihoodLabel} likelihood</span> <br/>of your money lasting till age <strong>{props.deathAge}</strong>.</p>
          <hr className="Results__hr" />
          <h2>Review your decisions</h2>
          <div class="show-mobile">
            <DecisionsStacked 
              reqIncome={props.reqIncome}
              volContributions={props.volContributions}
              workingStrategy={props.workingStrategy}
              retiredStrategy={props.retiredStrategy}
            />
          </div>
          <div className="show-desktop">
            <DecisionsTabbed
              reqIncome={props.reqIncome}
              volContributions={props.volContributions}
              workingStrategy={props.workingStrategy}
              onSliderRelease={() => props.onSliderRelease()}
              onSetReqIncome={(val) => props.onSetReqIncome(val)}
              onSetRetiredStrategy={(val) => props.onSetRetiredStrategy(val)}
              onSetVolContributions={(val) => props.onSetVolContributions(val)}
              onSetWorkingStrategy={(val) => props.onSetWorkingStrategy(val)}
              retiredStrategy={props.retiredStrategy}
            />
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
              <h2>Review your goals</h2>
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
              <a href="#" class="btn btn--large Results__cta">More information</a>
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
              <h1 class="desktop-title">Next steps</h1>
              <div className="Results__block">
                <div className="Results__img">
                  <img src={superHealthCheckImg} alt="" />
                </div>
                <div class="Results__wrap">
                  <h2 className="flat">Super Health Checks</h2>
                  <p>Covers broad recommendations that do not take into account your personal circumstances.</p>
                  <a href="https://www.lgiasuper.com.au/superannuation/super-health-check" class="btn btn--tertiary Results__action">
                    Book now
                  </a>
                </div>
              </div>
              <div className="Results__block">
                <div className="Results__img">
                  <img src={reportImg} style={{width: '80px', marginLeft: '14px'}}/>
                </div>
                <div class="Results__wrap">
                  <h2 className="flat">Generate your report</h2>
                  <p>Save and print a detailed report of this calculator to share with your partner or financial advisor.</p>
                  <a href="https://memberonline.lgiasuper.com.au/find-my-super/declaration-and-consent" class="btn btn--tertiary Results__action">
                    Download PDF
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
