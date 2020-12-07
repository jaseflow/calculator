import React, { useState, useEffect } from "react";

import Logo from './Logo.svg';
import LogoDark from './logo--dark.svg';
import './App.scss';

import AboutYou from './slides/AboutYou'
import OtherIncome from './slides/OtherIncome'
import IdealRetirement from './slides/IdealRetirement'
import RetirementGoals from './slides/RetirementGoals'
import Results from './slides/Results'

import Modal from './components/Modal'

import { Switch,
  useLocation,
  useHistory,
  Link,
  Route
} from 'react-router-dom';

const classNames = require('classnames')

const plans = [
  {
    id: 'simple',
    name: 'Simple',
    description: 'Age pension',
    value: 15000
  },
  {
    id: 'modest',
    name: 'Modest',
    description: '$27,902 pa',
    value: 27902
  },
  {
    id: 'comfy',
    name: 'Comfortable',
    description: '$43,687 pa',
    value: 43687
  },
  {
    id: 'premium',
    name: 'Premium',
    description: '$100,000 pa',
    value: 100000
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'Enter your own',
    value: null
  }
]


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
    name: "When you will get there",
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
  const [incomeSources, setIncomeSources] = useState([])
  const [goals, setGoals] = useState([])
  const [reqIncome, setReqIncome] = useState(activePlan.value)
  const [workingStrategy, setWorkingStrategy] = useState(1)
  const [retiredStrategy, setRetiredStrategy] = useState(1)
  const [contributions, setContributions] = useState(150)

  function findWithAttr(array, attr, value) {
    for(var i = 0; i < array.length; i += 1) {
      if(array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

  function handleIncomeClick(val) {
    let sources = incomeSources
    console.log(val)
    setIncomeSources(incomeSources.concat(val))
    setModalOpen(false)
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

  function handleSourceRemove(i) {
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

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  },[])

  useEffect(() => {
    if (location.pathname === '/calculator/' || location.pathname === '/') {
      setFooterVisible(false)
    } else if (location.path !== '/' && !footerVisible) {
      setFooterVisible(true)
    }
  },[location, footerVisible])

  useEffect(() => {
    if (window.innerWidth > 768) {
      history.push(steps[0].sections[0])
    }
    setWindowHeight(window.innerHeight)
  },[history])

  let nextButton

  if ((stepIndex + 1) === steps.length) {
    nextButton = <Link to='/completed' className="btn">Complete</Link>
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
      <header className="App__header">
        <div className="container">
          <img src={LogoDark} alt="" className="App__logo" />
        </div>
      </header>
      <nav className="Nav" style={{ height: windowHeight }}>
        <header className="Nav__header">
          <img src={Logo} alt="" className="Nav__logo" />
          <div className="Nav__blurb">
            <h1 className="Nav__title">Got a gap?</h1>
            <p>To effectively plan for life after work,
              you should understand how much you need and if you have a gap.
              This tool will help you make the required adjustments to live the life you want.
            </p>
            <p>
              <i style={{ marginRight : '0.5rem'  }} className="far fa-stopwatch Nav__clock"></i>
              <strong>Takes approximately 15 minutes</strong>
            </p>
          </div>
        </header>
        <footer className="Nav__footer">
          <div className="Nav__content">
            <ul className="Nav__steps">
              {navLinks}
            </ul>
          </div>
        </footer>
      </nav>
      <main className={`Slides ${location.pathname.includes('/step') ? 'Slides--open' : ''}`} style={{ height: windowHeight }}>
        <div className="Slides__wrap" style={{ height: windowHeight }}>
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
                        onSetSalary={(val) => setSalary(val)}
                      />
                    </Route>
                    <Route path="/step/current/other-income">
                      <OtherIncome
                        incomeSources={incomeSources}
                        onSourceRemove={(s) => handleSourceRemove(s)}
                        onAddingIncome={(val) => handleIncomeClick(val)} />
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
              <section className="Slides__slide">
                <div className="container">
                  <Results
                    reqIncome={reqIncome}
                    goals={goals}
                    contributions={contributions}
                    retiredStrategy={retiredStrategy}
                    workingStrategy={workingStrategy}
                    onOpenGoals={() => handleModalOpen('goals')}
                    onSetWorkingStrategy={(val) => setWorkingStrategy(val)}
                    onSetRetiredStrategy={(val) => setRetiredStrategy(val)}
                    onSetReqIncome={(val) => setReqIncome(val)}
                    onSetContributions={(val) => setContributions(val)}
                  />
                </div>
              </section>
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
        onIncomeClick={(val) => handleIncomeClick(val)}
        onGoalClick={(val) => handleGoalClick(val)}
        active={activeModal} 
        open={modalOpen}
        onDismiss={() => setModalOpen(false)}
      />
    </div>
  );
}

export default App;
