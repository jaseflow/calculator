import React, { useState, useEffect, useRef } from "react";

import LogoDark from './logo--dark.svg';
import LogoWhite from './logo--white.png';
import bg from './hero.jpg';
import './App.scss';

import AboutYou from './slides/AboutYou'
import OtherIncome from './slides/OtherIncome'
import IdealRetirementMobile from './slides/IdealRetirementMobile'
import IdealRetirementDesktop from './slides/IdealRetirementDesktop'
import RetirementGoals from './slides/RetirementGoals'
import Results from './slides/Results'

import Modal from './components/Modal'

import plans from './resources/plans'

import { Switch,
  useLocation,
  useHistory,
  Link,
  Route
} from 'react-router-dom';

import smoothscroll from 'smoothscroll-polyfill'
smoothscroll.polyfill();

const classNames = require('classnames')

const steps = [
  {
    name: "Where you're at",
    completed: false,
    helperText: 'General income and super balance',
    sections: [
      '/step/current/about-you',
      '/step/current/other-income'
    ]
  },
  {
    name: "Where you want to be",
    completed: false,
    helperText: 'Financial and lifestyle goals',
    sections: [
      '/step/future/ideal-retirement',
      '/step/future/retirement-goals'
    ]
  },
  {
    name: "When can you afford to retire",
    completed: false,
    helperText: 'Retirement age to achieve your goals',
    sections: [
      '/step/results'
    ]
  }
]

function App() {
  let location = useLocation()
  let history = useHistory()

  const wrapper = useRef(null)

  const [stepIndex, setStepIndex] = useState(0)
  const [sectionIndex, setSectionIndex] = useState(0)
  const [windowHeight, setWindowHeight] = useState(null)
  const [acceptedDisc, setAcceptedDisc] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [includePartner, setIncludePartner] = useState(false)
  const [includePartnerVoluntary, setIncludePartnerVoluntary] = useState('no')
  const [hasOtherSuper, setHasOtherSuper] = useState('no')
  const [otherFunds, setOtherFunds] = useState([])
  const [footerVisible, setFooterVisible] = useState(false)
  const [activeModal, setActiveModal] = useState('')
  const [activePlan, setActivePlan] = useState(plans[0])
  const [age, setAge] = useState(58)
  const [deathAge, setDeathAge] = useState(90)
  const [likelihood, setLikelihood] = useState(75)
  const [superBalance, setSuperBalance] = useState(500000)
  const [salary, setSalary] = useState(150000)
  const [partnerSalary, setPartnerSalary] = useState(0)
  const [incomeSources, setIncomeSources] = useState([])
  const [income, setIncome ] = useState(0)
  const [goals, setGoals] = useState([])
  const [reqIncome, setReqIncome] = useState(activePlan && activePlan.value.single)
  const [employerContributions, setEmployerContributions] = useState('12%')
  const [memberContributions, setMemberContributions] = useState('6%')
  const [workingStrategy, setWorkingStrategy] = useState(5)
  const [retiredStrategy, setRetiredStrategy] = useState(3)
  const [volContributions, setVolContributions] = useState(150)
  const [resultLoaded, setResultLoaded] = useState(false)
  const [viewTotals, setViewTotals] = useState(false)

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  function handleLinkClick(e, i) {
    // Open disclaimer if they're at the start and haven't accepted
    if(stepIndex === 0 && !acceptedDisc) {
      e.preventDefault()
      handleModalOpen('disclaimer')
    }
    // Update step indexes when clicking top nav links
    if (i >= 0) {
      setStepIndex(i)
      setSectionIndex(0)
    }
  }

  function addOtherFund() {
    let newFund = {
      balance: '',
      name: ''
    }
    let funds = [...otherFunds]
    funds.push(newFund)
    setOtherFunds(funds)
  }

  function handleSetOtherFundBalance(val, i) {
    let funds = [...otherFunds]
    let fund = {...otherFunds[i]}
    fund.balance = parseInt(val)
    funds[i] = fund
    setOtherFunds(funds)
  }

  function handleSetOtherFundName(val, i) {
    console.log(val, i)
    let funds = [...otherFunds]
    let fund = {...otherFunds[i]}
    fund.name = val
    funds[i] = fund
    setOtherFunds(funds)
  }

  function handleRemoveOtherFund(i) {
    const newFunds = otherFunds.filter((fund, index) => index !== i)
    setOtherFunds(newFunds)
  }

  function handleIncludeOtherSuper(val) {
    setHasOtherSuper(val)
    // add fund if no funds
    if (val === 'yes' && !otherFunds.length) {
      addOtherFund()
    }
  }

  function handleViewToggle(val) {
    if(val) {
      const employerPercentage = parseInt(employerContributions.replace('%', ''))
      const employerTotal = ((employerPercentage / 100) * salary) / 12

      const memberPercentage = parseInt(memberContributions.replace('%', ''))
      const memberTotal = ((memberPercentage / 100) * salary) / 12

      setEmployerContributions(`$${employerTotal}`)
      setMemberContributions(`$${memberTotal}`)
    } else {
      const employerTotal = parseInt(employerContributions.replace('$', ''))
      const employerPercentage = ((employerTotal / salary) * 100) * 12

      const memberTotal = parseInt(memberContributions.replace('$', ''))
      const memberPercentage = ((memberTotal / salary) * 100) * 12

      setEmployerContributions(`${employerPercentage}%`)
      setMemberContributions(`${memberPercentage}%`)
    }
    setViewTotals(val)
  }

  function handleContinueDisc() {
    setModalOpen(false)
    history.push(steps[0].sections[0])
  }

  function handleAddIncome(val) {
    let newSources = incomeSources
    newSources.push(val)
    setIncomeSources(newSources)
    setModalOpen(false)
  }

  function handleCustomIncome(val) {
    setActivePlan(null)
    setReqIncome(val)
  }

  function handleSliderRelease() {
    if (window.innerWidth > 768) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    } else {
      wrapper.current.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
    setResultLoaded(false)
    setTimeout(() => {
      setResultLoaded(true)
    }, 1000)
  }

  function handleGoalClick(val) {
    let newGoals = goals
    newGoals.push(val)
    setGoals(goals)
    setModalOpen(false)
  }

  function handleActivePlan(val) {
    const planIndex = findWithAttr(plans, 'id', val);
    setActivePlan(plans[planIndex])
  }

  function handleRemoveIncome(i) {
    const newSources = incomeSources.filter((item, index) => index !== i)
    setIncomeSources(newSources)
    setModalOpen(false)
  }

  function handleRemoveGoal(i) {
    const newGoals = goals.filter((item, index) => index !== i)
    setGoals(newGoals)
    setModalOpen(false)
  }

  function handleSave() {
    steps[stepIndex].completed = true
    setStepIndex(stepIndex + 1)
    setSectionIndex(0)
  }

  function handleModalOpen(modal) {
    setModalOpen(true)
    setActiveModal(modal)
  }

  function handleSetIncomeSourceValue(val, i) {
    let sources = [...incomeSources]
    let incomeSource = {...incomeSources[i]}
    incomeSource.value = parseInt(val)
    sources[i] = incomeSource
    setIncomeSources(sources)
  }

  function handleSetIncomeSourceIncome(val, i) {
    let sources = [...incomeSources]
    let incomeSource = {...incomeSources[i]}
    incomeSource.income = parseInt(val)
    sources[i] = incomeSource
    setIncomeSources(sources)
  }

  function handleSetIncomeSourcePeriod(val, i) {
    let sources = [...incomeSources]
    let incomeSource = {...incomeSources[i]}
    incomeSource.period = val
    sources[i] = incomeSource
    setIncomeSources(sources)
  }

  function handleSetGoalId(val, i) {
    let newGoals = [...goals]
    let currentGoal = {...goals[i]}
    currentGoal.id = val
    newGoals[i] = currentGoal
    setGoals(newGoals)
  }

  function handleSetGoalFrequency(val, i) {
    let newGoals = [...goals]
    let currentGoal = {...goals[i]}
    currentGoal.frequency = val
    newGoals[i] = currentGoal
    setGoals(newGoals)
  }

  function handleSetGoalCost(val, i) {
    let newGoals = [...goals]
    let currentGoal = {...goals[i]}
    currentGoal.cost = parseInt(val)
    newGoals[i] = currentGoal
    setGoals(newGoals)
  }

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  },[])

  useEffect(() => {
    if (includePartner || includePartnerVoluntary === 'yes') {
      if (window.innerWidth < 768) {
        wrapper.current.scroll({
          top: wrapper.current.scrollHeight,
          left: 0,
          behavior: 'smooth'
        })
      } else {
        window.scroll({
          top: wrapper.current.scrollHeight,
          left: 0,
          behavior: 'smooth'
        })
      }
    }
  },[includePartner, includePartnerVoluntary])

  useEffect(() => {
    let totals = 0
    incomeSources.forEach((s) => {
      totals = totals + s.value
    })
    setIncome(salary + partnerSalary + totals)
  },[incomeSources, salary, partnerSalary])

  useEffect(() => {
    if (activePlan && includePartner) {
      setReqIncome(activePlan.value.couple)
    } else if (activePlan && !includePartner) {
      setReqIncome(activePlan.value.single)
    }
  },[activePlan, includePartner])

  useEffect(() => {
    if (location.pathname === '/calculator/' || location.pathname === '/') {
      setFooterVisible(false)
    } else if (location.path !== '/' && !footerVisible) {
      setFooterVisible(true)
    }
    if (location.pathname === '/step/results' || location.pathname === '/step/summary') {
      setFooterVisible(false)
    }
    if (location.pathname === '/step/results') {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
      setResultLoaded(true)
    }
  },[location, footerVisible])

  let nextButton

  if ((stepIndex + 1) === steps.length) {
    nextButton = <Link to='/completed' className="btn">Next steps</Link>
  } else {
    if ((sectionIndex + 1) >= steps[stepIndex].sections.length) {
      nextButton = <Link onClick={handleSave} to={steps[stepIndex + 1].sections[0]} className="btn">Next</Link>
    } else {
      nextButton = <Link onClick={() => setSectionIndex(sectionIndex + 1)} to={steps[stepIndex].sections[sectionIndex + 1]} className="btn">Next</Link>
    }
  }

  const navLinks = steps.map((step, i) => {
    const linkClasses = classNames({
      'Nav__link': true,
      'Nav__link--active': stepIndex === i,
      'Nav__link--completed': step.completed
    })
    return (
      <li key={`step-${i}`} className="flat">
        {step.completed || stepIndex === i ?
          <Link to={steps[i].sections[0]} onClick={(e) => handleLinkClick(e, i)} className={linkClasses}>
            {step.completed ? 
              <div className="Nav__counter Nav__counter--checked">
                <i className="far fa-check"></i>
              </div>
              :
              <div className="Nav__counter">{i + 1}</div>
            }
            <div>
              <strong>{step.name}</strong>
              <small>{step.helperText}</small>
            </div>
            <i className="far fa-chevron-right Nav__icon"></i>
          </Link>
          :
          <div className={linkClasses}>
            {step.completed ? 
              <div className="Nav__counter Nav__counter--checked">
                <i className="far fa-check"></i>
              </div>
              :
              <div className="Nav__counter">{i + 1}</div>
            }
            <div>
              <strong>{step.name}</strong>
              <small>{step.helperText}</small>
            </div>
            <i className="far fa-chevron-right Nav__icon"></i>
          </div>
        }
      </li>
    )
  })

  return (
    <div className="App">
      <nav className={`Nav ${location.pathname.includes('/step') ? 'Nav--hidden' : ''}`} style={{ height: windowHeight }}>
        <header className="Nav__header">
          <div className="Nav__hero" style={{ backgroundImage: `url(${bg})`}}></div>
          <div className="Nav__blurb">
            <img src={LogoWhite} alt="" className="Nav__logo" />
            <div>
              <h1 className="Nav__title">Got a gap?</h1>
              <p>To effectively plan for life after work,
                you should understand how much you need and if you have a gap.
                This tool will help you make the required adjustments to live the life you want.
              </p>
              <p>
                <i style={{ marginRight : '0.5rem'  }} className="far fa-stopwatch Nav__clock"></i>
                <strong>Takes approximately 15 minutes</strong>
              </p>
              <div className="Nav__action">
                <Link className="btn btn--large btn--hero" onClick={(e) => handleLinkClick(e)} to="/step/current/about-you">Get started</Link>
              </div>
            </div>
          </div>
        </header>
        <footer className="Nav__footer">
          <div className="Nav__content">
            <Link to="/" onClick={() => setStepIndex(0)}>
              <img src={LogoDark} alt="" className="Nav__inline-logo" />
            </Link>
            <ul className="Nav__steps">
              {navLinks}
              <div className="Nav__track">
                <div className={`Nav__track-bar Nav__track-bar--${stepIndex}`}></div>
              </div>
            </ul>
          </div>
        </footer>
      </nav>
      <main className={`Slides ${location.pathname.includes('/step') ? 'Slides--open' : ''}`} style={{ height: windowHeight }}>
        <div className="Slides__wrap" ref={wrapper} style={{ height: windowHeight }}>
          <Switch>
            <Route path="/step/current">
              <section className="Slides__slide">
                <div className="container">
                  <h1 className="Slides__title">
                    Where you're at
                  </h1>
                  <Switch>
                    <Route path="/step/current/about-you">
                      <AboutYou 
                        age={age}
                        includePartner={includePartner}
                        includePartnerVoluntary={includePartnerVoluntary}
                        hasOtherSuper={hasOtherSuper}
                        otherFunds={otherFunds}
                        volContributions={volContributions}
                        superBalance={superBalance}
                        salary={salary}
                        employerContributions={employerContributions}
                        memberContributions={memberContributions}
                        viewTotals={viewTotals}
                        onSetViewTotals={(val) => handleViewToggle(val)}
                        onAddOtherFund={() => addOtherFund()}
                        onRemoveOtherFund={(i) => handleRemoveOtherFund(i)}
                        onPartnerInclude={() => setIncludePartner(!includePartner)}
                        onIncludePartnerVoluntary={(val) => setIncludePartnerVoluntary(val)}
                        onIncludeOtherSuper={(val) => handleIncludeOtherSuper(val)}
                        onSetOtherFundBalance={(val, i) => handleSetOtherFundBalance(val, i)}
                        onSetOtherFundName={(val, i) => handleSetOtherFundName(val, i)}
                        onSetAge={(val) => setAge(val)}
                        onSetVolContributions={(val) => setVolContributions(val)}
                        onSetSuper={(val) => setSuperBalance(val)}
                        onSetSalary={(val) => setSalary(parseInt(val))}
                        onSetPartnerSalary={(val) => setPartnerSalary(parseInt(val))}
                      />
                    </Route>
                    <Route path="/step/current/other-income">
                      <OtherIncome
                        incomeSources={incomeSources}
                        onRemoveIncome={(s) => handleRemoveIncome(s)}
                        onSetIncomeSourceValue={(val, i) => handleSetIncomeSourceValue(val, i)}
                        onSetIncomeSourceIncome={(val, i) => handleSetIncomeSourceIncome(val, i)}
                        onSetIncomeSourcePeriod={(val, i) => handleSetIncomeSourcePeriod(val, i)}
                        onAddIncome={() => handleModalOpen('income')} />
                    </Route>
                  </Switch>
                </div>
              </section>
            </Route>
            <Route path="/step/future">
              <section className="Slides__slide">
                <div className="container">
                  <h1 className="Slides__title">
                    Where you want to be
                  </h1>
                  <Switch>
                    <Route path="/step/future/ideal-retirement">
                      <div className="show-mobile">
                        <IdealRetirementMobile
                          income={income}
                          activePlan={activePlan && activePlan.id}
                          reqIncome={reqIncome}
                          modestIncome={includePartner ? plans[0].value.couple : plans[0].value.single}
                          comfyIncome={includePartner ? plans[1].value.couple : plans[1].value.single}
                          premiumIncome={includePartner ? plans[2].value.couple : plans[2].value.single}
                          includePartner={includePartner}
                          onSetPlan={(val) => handleActivePlan(val)}
                          onSetCustomIncome={(val) => handleCustomIncome(val)}
                          plans={plans}
                          onInfoClick={(d) => handleModalOpen(d)}
                        />
                      </div>
                      <div className="show-desktop">
                        <IdealRetirementDesktop
                          income={income}
                          reqIncome={reqIncome}
                          deathAge={deathAge}
                          modestIncome={includePartner ? plans[0].value.couple : plans[0].value.single}
                          comfyIncome={includePartner ? plans[1].value.couple : plans[1].value.single}
                          premiumIncome={includePartner ? plans[2].value.couple : plans[2].value.single}
                          includePartner={includePartner}
                          activePlan={activePlan && activePlan.id}
                          onSetPlan={(val) => handleActivePlan(val)}
                          onSetDeathAge={(val) => setDeathAge(val)}
                          onSetCustomIncome={(val) => handleCustomIncome(val)}
                        />
                      </div>
                    </Route>
                    <Route path="/step/future/retirement-goals">
                      <RetirementGoals
                        goals={goals}
                        onRemoveGoal={(i) => handleRemoveGoal(i)}
                        onAddingGoal={() => handleModalOpen('goals')}
                        onSetGoalCost={(val, i) => handleSetGoalCost(val, i)}
                        onSetGoalFrequency={(val, i) => handleSetGoalFrequency(val, i)}
                        onSetGoalId={(val, i) => handleSetGoalId(val, i)}
                      />
                    </Route>
                  </Switch>
                </div>
              </section>
            </Route>
            <Route path="/step/results">
              <Results
                reqIncome={reqIncome}
                incomeSources={incomeSources}
                goals={goals}
                volContributions={volContributions}
                retiredStrategy={retiredStrategy}
                workingStrategy={workingStrategy}
                deathAge={deathAge}
                likelihood={likelihood}
                loaded={resultLoaded}
                onOpenModal={(modal) => handleModalOpen(modal)}
                onRemoveIncome={(s) => handleRemoveIncome(s)}
                onRemoveGoal={(i) => handleRemoveGoal(i)}
                onSetWorkingStrategy={(val) => setWorkingStrategy(val)}
                onSetRetiredStrategy={(val) => setRetiredStrategy(val)}
                onSetReqIncome={(val) => setReqIncome(val)}
                onSliderRelease={() => handleSliderRelease()}
                onSetVolContributions={(val) => setVolContributions(val)}
                onSetIncomeSourceValue={(val, i) => handleSetIncomeSourceValue(val, i)}
                onSetIncomeSourceIncome={(val, i) => handleSetIncomeSourceIncome(val, i)}
                onSetIncomeSourcePeriod={(val, i) => handleSetIncomeSourcePeriod(val, i)}
                onSetGoalCost={(val, i) => handleSetGoalCost(val, i)}
                onSetGoalFrequency={(val, i) => handleSetGoalFrequency(val, i)}
                onSetGoalId={(val, i) => handleSetGoalId(val, i)}
              />
            </Route>
          </Switch>
        </div>
      </main>
      <footer className={`Slides__footer ${footerVisible ? 'Slides__footer--visible' : ''}`}>
        <div className="container">
          <div className="Slides__actions">
            { sectionIndex < 1 ? 
              <Link to="/" className={`Slides__back ${sectionIndex === 0 ? 'Slides__back--first' : ''}`}>
                <i className="far fa-chevron-left"></i>
              </Link>
              :
              <Link onClick={() => setSectionIndex(sectionIndex - 1)} to={steps[stepIndex].sections[sectionIndex - 1]} className="Slides__back">
                <i className="far fa-chevron-left"></i>
              </Link>
            }
          </div>
          <div onClick={() => handleModalOpen('assumptions')} className="Settings">
            <i className="fa fa-cog"></i>
            <span className="Settings__label">Settings</span>
          </div>
          <div>
            {nextButton}
          </div>
        </div>
      </footer>
      <Modal
        modestIncome={includePartner ? plans[0].value.couple : plans[0].value.single}
        comfyIncome={includePartner ? plans[1].value.couple : plans[1].value.single}
        premiumIncome={includePartner ? plans[2].value.couple : plans[2].value.single}
        deathAge={deathAge}
        likelihood={likelihood}
        onIncomeClick={(val) => handleAddIncome(val)}
        onGoalClick={(val) => handleGoalClick(val)}
        onSetDeathAge={(val) => setDeathAge(val)}
        onSetLikelihood={(val) => setLikelihood(val)}
        active={activeModal} 
        open={modalOpen}
        acceptedDisc={acceptedDisc}
        onDismiss={() => setModalOpen(false)}
        onAcceptDisc={() => setAcceptedDisc(!acceptedDisc)}
        onContinueDisc={handleContinueDisc}
      />
    </div>
  );
}

export default App;
