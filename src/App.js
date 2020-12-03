import React, { useState, useEffect } from "react";

import Logo from './Logo.svg';
import './App.scss';

import AboutYou from './slides/AboutYou'
import OtherIncome from './slides/OtherIncome'
import IdealRetirement from './slides/IdealRetirement'
import RetirementGoals from './slides/RetirementGoals'

import { Switch,
  useLocation,
  useHistory,
  Link,
  Route
} from 'react-router-dom';

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
  const [ modalOpen, setModalOpen ] = useState(false)

  function handleSave() {
    steps[stepIndex].completed = true
    setStepIndex(stepIndex + 1)
    setSectionIndex(0)
  }

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

  useEffect(() => {
    setWindowHeight(window.innerHeight)
  },[])

  useEffect(() => {
    if (window.innerWidth > 768) {
      history.push(steps[0].sections[0])
    }
    setWindowHeight(window.innerHeight)
  },[])

  return (
    <div className="App">
      <nav className="Nav" style={{ height: windowHeight }}>
        <header className="Nav__header">
          <img src={Logo} alt="" className="Nav__logo" />
          <div className="Nav__blurb">
            <h1 className="Nav__title">Got a gap?</h1>
            <p>To effectively plan for life after work,
              you should understand how much you need and if you have a gap.
              This tool will help you identify and make the required adjustments
              to create the future you want.
            </p>
            <p>
              <i style={{ marginRight : '0.5rem' }} className="far fa-stopwatch Nav__clock"></i>
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
                    <i className="Nav__counter Nav__counter--active">1</i>
                    Where you're at
                  </h1>
                  <Switch>
                    <Route path="/step/current/about-you">
                      <AboutYou />
                    </Route>
                    <Route path="/step/current/other-income">
                      <OtherIncome />
                    </Route>
                  </Switch>
                </div>
              </section>
            </Route>
            <Route path="/step/future">
              <section className="Slides__slide">
                <div className="container">
                  <h1 className="Slides__title">
                    <i className="Nav__counter Nav__counter--active">2</i>
                    Where you want to be
                  </h1>
                  <Switch>
                    <Route path="/step/future/ideal-retirement">
                      <IdealRetirement onInfoClick={() => setModalOpen(true)} />
                    </Route>
                    <Route path="/step/future/retirement-goals">
                      <RetirementGoals />
                    </Route>
                  </Switch>
                </div>
              </section>
            </Route>
            <Route path="/step/results">
              <section className="Slides__slide">
                <div className="container">
                  <h1>
                    <i className="Nav__counter Nav__counter--active">2</i>
                    Results
                  </h1>
                  <p>Elit amet vel fuga sint doloremque? Laborum quo ea itaque aliquam animi? Dignissimos fuga quas modi repellat sit? Odit incidunt sunt autem eos possimus Esse illo nisi culpa tenetur temporibus</p>
                </div>
              </section>
            </Route>
          </Switch>
        </div>
        <footer className="Slides__footer">
          <div className="container">
            { sectionIndex < 1 ? 
              <Link to="/" className="Slides__back">
                <i className="far fa-chevron-left"></i>
              </Link>
              :
              <Link onClick={() => setSectionIndex(sectionIndex - 1)} to={steps[stepIndex].sections[sectionIndex - 1]} className="Slides__back">
                <i className="far fa-chevron-left"></i>
              </Link>
            }
            {nextButton}
          </div>
        </footer>
      </main>
      <div className={`Modal ${modalOpen ? 'Modal--open' : ''}`}>
        <div className="Modal__card">
          <div className="Modal__scroll">
            <div className="Modal__hero"></div>
            <div className="Modal__content">
              <h2 class="flat">Comfortable retirement</h2>
              <p>$43,687 pa</p>
              <p>A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:</p>
              <p>A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:</p>
              <p>A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:</p>
              <p>A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:</p>
              <p>A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:</p>
              <p>A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:</p>
              <h3>Available lifestyle</h3>
              <ul>
                <li>A reasonable car</li>
                <li>Occasional international travel</li>
                <li>Private health</li>
              </ul>
            </div>
          </div>
          <footer class="Modal__footer">
            <button class="btn btn--secondary" onClick={() => setModalOpen(false)}>Okay, got it</button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
