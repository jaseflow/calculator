import React, { useState } from "react";

import Logo from './Logo.svg';
import './App.scss';

import {
  Switch,
  useLocation,
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
  const location = useLocation()
  const [stepIndex, setStepIndex] = useState(0)
  const [sectionIndex, setSectionIndex] = useState(0)

  function handleSave() {
    steps[stepIndex].completed = true
    setStepIndex(stepIndex + 1)
    setSectionIndex(0)
  }

  const navLinks = steps.map((step, i) => {
    const linkClasses = classNames({
      'Nav__link': true,
      'Nav__link--active': stepIndex === i,
      'Nav__link--completed': step.completed
    })
    return (
      <li>
        {step.completed || stepIndex === i ?
          <Link to={steps[i].sections[0]} onClick={() => setStepIndex(i)} className={linkClasses}>
            <strong>{step.name}</strong>
            <small>{step.helperText}</small>
            {step.completed ? 
              <i className="far fa-check Nav__icon"></i>
              :
              <i className="far fa-chevron-right Nav__icon"></i>
            }
          </Link>
          :
          <div className={linkClasses}>
            <strong>{step.name}</strong>
            <small>{step.helperText}</small>
            <i className="far fa-chevron-right Nav__icon"></i>
          </div>
        }
      </li>
    )
  })

  return (
    <div className="App">
      <nav className="Nav">
        <header className="Nav__header">
          <img src={Logo} alt="" />
          <div className="Nav__blurb">
            <h1 className="Nav__title">Got a gap?</h1>
            <p>To effectively plan for life after work,
              you should understand how much you need and if you have a gap.
              This tool will help you identify and make the required adjustments
              to create the future you want.
            </p>
            <p>
              <i style={{ marginRight : '0.5rem' }} className="far fa-stopwatch"></i>
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
      <main className={`Slides ${location.pathname.includes('/step') ? 'Slides--open' : ''}`}>
        <div className="Slides__wrap">
          <Switch>
            <Route path="/step/current">
              <section className="Slides__slide">
                <div className="container">
                  <h1>Where you're at</h1>
                  <Switch>
                    <Route path="/step/current/about-you">
                      <h2>About you</h2>
                      <p>You will notice we have prefilled information we lready know about you.</p>
                      <div className="form">
                        <div className="form__row">
                          <div className="form__group">
                            <label className="form__label" htmlFor="">Age</label>
                            <input type="text" value="58" className="form__input form__input--suffixed" />
                            <span className="form__suffix">years old</span>
                          </div>
                          <div className="form__group">
                            <label className="form__label" htmlFor="">My salary before tax is</label>
                            <input type="text" value="58" className="form__input form__input--suffixed" />
                            <span className="form__suffix">per year</span>
                          </div>
                        </div>
                        <div className="form__row">
                          <div className="form__group">
                            <label className="form__label" htmlFor="">My current super balance is</label>
                            <input type="text" value="58" className="form__input" />
                          </div>
                          <div className="form__group">
                            <label className="form__label" htmlFor="">Extra contributions</label>
                            <input type="text" value="58" className="form__input form__input--suffixed" />
                            <span className="form__suffix">per month</span>
                          </div>
                        </div>
                      </div>
                    </Route>
                    <Route path="/step/current/other-income">
                      <h2>Other income</h2>
                      <p>If you have any other sources of income plesae add them below.</p>
                      <button class="btn btn--secondary">
                        Add another income source <i className="far fa-plus"></i>
                      </button>
                    </Route>
                  </Switch>
                </div>
              </section>
            </Route>
            <Route path="/step/future">
              <section className="Slides__slide">
                <div className="container">
                  <h1>Where you want to be</h1>
                  <Switch>
                    <Route path="/step/future/ideal-retirement">
                      <h2>Your ideal retirement</h2>
                      <p>Your current combined income is $200,000 per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support.</p>
                    </Route>
                    <Route path="/step/future/retirement-goals">
                      <h2>Your retirement goals</h2>
                      <p>Add some retirement goals to help calculate how much you will need.</p>
                      <button class="btn btn--secondary">Add a retirement goals <i className="far fa-plus"></i></button>
                    </Route>
                  </Switch>
                </div>
              </section>
            </Route>
            <Route path="/step/results">
              <section className="Slides__slide">
                <div className="container">
                  <h1>Results</h1>
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
            { (sectionIndex + 1) >= steps[stepIndex].sections.length ? 
              <Link onClick={handleSave} to={steps[stepIndex + 1].sections[0]} className="btn">Save</Link>
              :
              <Link onClick={() => setSectionIndex(sectionIndex + 1)} to={steps[stepIndex].sections[sectionIndex + 1]} className="btn">Next</Link>
            }
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
