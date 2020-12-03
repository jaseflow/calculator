import React, { useState  } from 'react';

import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'

const plans = [
  {
    id: 'simple',
    name: 'Simple',
    description: 'Age pension'
  },
  {
    id: 'modest',
    name: 'Modest',
    description: '$27,902 pa'
  },
  {
    id: 'comfy',
    name: 'Comfortable',
    description: '$43,687 pa'
  },
  {
    id: 'premium',
    name: 'Premium',
    description: '$100,000 pa'
  },
  {
    id: 'custom',
    name: 'Custom',
    description: 'Enter your own'
  }
]

function IdealRetirement() {

  const [ age, setAge ] = useState(66)
  const [ plan, setPlan ] = useState('simple')
  const [ modalOpen, setModalOpen ] = useState(false)

  const labels = {
    50: '50',
    80: '80'
  }

  const planOptions = plans.map((p) => {
    return (
      <label htmlFor={p.id} class="Plan">
        <input type="radio" class="Plan__input" id={p.id} value={p.id} checked={plan === p.id} onChange={() => setPlan(p.id)} />
        <div className={`Plan__circle ${p.id === plan ? 'Plan__circle--selected' : ''}`}></div>
        <div className="Plan__content">
          <strong className="Plan__name">{p.name}</strong>
          <small className="Plan__description">{p.description}</small>
        </div>
        { p.id != 'custom' &&
          <i className="fal fa-info-circle Plan__info" onClick={() => setModalOpen(true)}></i>
        }
      </label>
    )
  })

  return (
    <div>
      <h2>Your ideal retirement</h2>
      <p>Your current combined income is $200,000 per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support.</p>
      <div className="form__slider">
        <label htmlFor="" class="form__label form__label--range">
          Retirement age
          <strong>{age}</strong>
        </label>
        <Slider
          min={50}
          max={80}
          labels={labels}
          tooltip={false}
          value={age}
          onChange={(val) => setAge(val)}
        />
      </div>
      <div>
        {planOptions}
        {plan === 'custom' &&
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
  )
}

export default IdealRetirement
