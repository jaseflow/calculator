import React, { useState  } from 'react';

function AboutYou() {
  const [ includePartner, setIncludePartner  ] = useState(false)

  return (
    <div>
      <h2>About you</h2>
      <div className="Alert">
        <p class="flat">You will notice we have prefilled information we already know about you.</p>
      </div>
      <div className="form">
        <div className="form__row">
          <div className="form__group">
            <label className="form__label" htmlFor="">Age</label>
            <input type="text" value="58" className="form__input form__input--suffixed" />
            <span className="form__suffix">years old</span>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">My salary before tax is</label>
            <input type="text" value="$150,000" className="form__input form__input--suffixed" />
            <span className="form__suffix">per year</span>
          </div>
        </div>
        <div className="form__row">
          <div className="form__group">
            <label className="form__label" htmlFor="">My current super balance is</label>
            <input type="text" value="$500,000" className="form__input" />
          </div>
          <div className="form__group flat">
            <label className="form__label" htmlFor="">Extra contributions</label>
            <input type="text" value="$300" className="form__input form__input--suffixed" />
            <span className="form__suffix">per month</span>
          </div>
        </div>
      </div>
      <label className="form__label form__label--checkbox flat" htmlFor="includePartner" onChange={() => setIncludePartner(!includePartner)}>
        <input type="checkbox" id="includePartner" className="form__checkbox" />
        Include my partner
      </label>
      { includePartner ?
        <div className="form">
          <hr />
          <div className="form__row">
            <div className="form__group">
              <label className="form__label" htmlFor="">Their age</label>
              <input type="text" value="58" className="form__input form__input--suffixed" />
              <span className="form__suffix">years old</span>
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="">Their salary before tax is</label>
              <input type="text" value="$150,000" className="form__input form__input--suffixed" />
              <span className="form__suffix">per year</span>
            </div>
          </div>
          <div className="form__row">
            <div className="form__group">
              <label className="form__label" htmlFor="">Their current super balance is</label>
              <input type="text" value="$500,000" className="form__input" />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="">Extra contributions they make</label>
              <input type="text" value="$300" className="form__input form__input--suffixed" />
              <span className="form__suffix">per month</span>
            </div>
          </div>
        </div>
      : null }
    </div>
  )
}

export default AboutYou
