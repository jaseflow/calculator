import React, { useState, useEffect, useRef } from "react";

import LogoDark from './logo--dark.svg';
import LogoWhite from './logo--white.png';
import bg from './hero.jpg';
import './App.scss';

import AboutYou from './slides/AboutYou'
import OtherIncome from './slides/OtherIncome'
import IdealRetirement from './slides/IdealRetirement'
import RetirementGoals from './slides/RetirementGoals'
import Results from './slides/Results'

import Modal from './components/Modal'

import plans from './resources/plans'

import { Switch,
  useLocation,
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
    name: "When can you afford to retire?",
    completed: false,
    helperText: 'Retirement age to achieve your goals',
    sections: [
      '/step/results'
    ]
  }
]

function App() {
  let location = useLocation()

  const wrapper = useRef(null)

  const [progress, setProgress] = useState(0)
  const [stepIndex, setStepIndex] = useState(0)
  const [sectionIndex, setSectionIndex] = useState(0)
  const [windowHeight, setWindowHeight] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [includePartner, setIncludePartner] = useState(false)
  const [footerVisible, setFooterVisible] = useState(false)
  const [activeModal, setActiveModal] = useState('')
  const [activePlan, setActivePlan] = useState(plans[0])
  const [age, setAge] = useState(58)
  const [retAge, setRetAge] = useState(66)
  const [superBalance, setSuperBalance] = useState(500000)
  const [salary, setSalary] = useState(150000)
  const [partnerSalary, setPartnerSalary] = useState(0)
  const [incomeSources, setIncomeSources] = useState([])
  const [income, setIncome ] = useState(0)
  const [goals, setGoals] = useState([])
  const [reqIncome, setReqIncome] = useState(activePlan.value.single)
  const [workingStrategy, setWorkingStrategy] = useState(5)
  const [retiredStrategy, setRetiredStrategy] = useState(3)
  const [contributions, setContributions] = useState(150)
  const [resultLoaded, setResultLoaded] = useState(false)

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  function handleAddIncome(val) {
    let newSources = incomeSources
    newSources.push(val)
    setIncomeSources(newSources)
    setModalOpen(false)
  }

  function handleSliderRelease() {
    wrapper.current.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    setResultLoaded(false)
    setProgress(0)
    setTimeout(() => {
      setResultLoaded(true)
      setProgress(82)
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

  function handleGoalRemove(i) {
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

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  },[])

  useEffect(() => {
    let totals = 0
    incomeSources.forEach((s) => {
      totals = totals + s.value
    })
    setIncome(salary + partnerSalary + totals)
  },[incomeSources, salary, partnerSalary])

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
      setResultLoaded(true)
      setTimeout(() => {
        setProgress(75)
      }, 750)
    }
  },[location, footerVisible])

  let nextButton

  if ((stepIndex + 1) === steps.length) {
    nextButton = <Link to='/completed' className="btn">Next steps</Link>
  } else {
    if ((sectionIndex + 1) >= steps[stepIndex].sections.length) {
      nextButton = (
        <div>
          <div className="show-desktop">
            <Link onClick={handleSave} to={steps[stepIndex + 1].sections[0]} className="btn">Save</Link>
          </div>
          <div className="show-mobile">
            <Link onClick={handleSave} to="/" className="btn">Save</Link>
          </div>
        </div>
      )
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
      <li key={`step-${i}`}>
        {step.completed || stepIndex === i ?
          <Link to={steps[i].sections[0]} onClick={() => setStepIndex(i)} className={linkClasses}>
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
                <Link className="btn btn--hero" to="/step/current/about-you">Get started</Link>
              </div>
            </div>
          </div>
        </header>
        <footer className="Nav__footer">
          <div className="Nav__content">
            <Link to="/">
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
                        contributions={contributions}
                        superBalance={superBalance}
                        salary={salary}
                        onPartnerInclude={() => setIncludePartner(!includePartner)}
                        onSetAge={(val) => setAge(val)}
                        onSetContributions={(val) => setContributions(val)}
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
                      <IdealRetirement
                        income={income}
                        includePartner={includePartner}
                        onSetPlan={(val) => handleActivePlan(val)}
                        onSetRetirementAge={(val) => setRetAge(val)}
                        retirementAge={retAge}
                        activePlan={activePlan.id}
                        plans={plans}
                        onInfoClick={(d) => handleModalOpen(d)}
                      />
                    </Route>
                    <Route path="/step/future/retirement-goals">
                      <RetirementGoals
                        goals={goals}
                        onGoalRemove={(i) => handleGoalRemove(i)}
                        onAddingGoal={() => handleModalOpen('goals')}
                      />
                    </Route>
                  </Switch>
                </div>
              </section>
            </Route>
            <Route path="/step/results">
              <Results
                progress={progress}
                reqIncome={reqIncome}
                incomeSources={incomeSources}
                goals={goals}
                retirementAge={retAge}
                contributions={contributions}
                retiredStrategy={retiredStrategy}
                workingStrategy={workingStrategy}
                loaded={resultLoaded}
                onOpenModal={(modal) => handleModalOpen(modal)}
                onSetProgress={(val) => setProgress(val)}
                onSetIncomeSourceValue={(val, i) => handleSetIncomeSourceValue(val, i)}
                onSetWorkingStrategy={(val) => setWorkingStrategy(val)}
                onSetRetiredStrategy={(val) => setRetiredStrategy(val)}
                onSetReqIncome={(val) => setReqIncome(val)}
                onSliderRelease={() => handleSliderRelease()}
                onSetContributions={(val) => setContributions(val)}
              />
            </Route>
          </Switch>
        </div>
      </main>
      <footer className={`Slides__footer ${footerVisible ? 'Slides__footer--visible' : ''}`}>
        <div className="container">
          { sectionIndex < 1 ? 
            <Link to="/" className={`Slides__back ${sectionIndex === 0 ? 'Slides__back--first' : ''}`}>
              <i className="far fa-chevron-left"></i>
            </Link>
            :
            <Link onClick={() => setSectionIndex(sectionIndex - 1)} to={steps[stepIndex].sections[sectionIndex - 1]} className="Slides__back">
              <i className="far fa-chevron-left"></i>
            </Link>
          }
          <div>
            {nextButton}
          </div>
        </div>
      </footer>
      <Modal
        simpleIncome={includePartner ? plans[0].value.couple : plans[0].value.single}
        modestIncome={includePartner ? plans[1].value.couple : plans[1].value.single}
        comfyIncome={includePartner ? plans[2].value.couple : plans[2].value.single}
        premiumIncome={includePartner ? plans[3].value.couple : plans[3].value.single}
        onIncomeClick={(val) => handleAddIncome(val)}
        onGoalClick={(val) => handleGoalClick(val)}
        active={activeModal} 
        open={modalOpen}
        onDismiss={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
