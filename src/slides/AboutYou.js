import React, { useState } from 'react';

function AboutYou(props) {
  const [ includePartnerVoluntary, setIncludePartnerVoluntary  ] = useState('no')

  return (
    <div>
      <div className="Alert">
        <p className="flat">You will notice we have prefilled information we already know about you.</p>
      </div>
      <h2>About you</h2>
      <div className="form">
        <div className="form__row">
          <div className="form__group">
            <label className="form__label" htmlFor="">Gender</label>
            <select id="" name="" className="form__input form__input--select">
              <option value="">Male</option>
              <option value="">Female</option>
            </select>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Age</label>
            <input type="text" value={props.age} className="form__input" onChange={(val) => props.onSetAge(val)} />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">Current super balance</label>
          <input type="text" value={props.superBalance} className="form__input" onChange={(val) => props.onSetSuper(val)} />
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">Annual salary (before tax)</label>
          <input type="text" value={props.salary} className="form__input" onChange={(val) => props.onSetSalary(val)} />
        </div>
        <h2>Contributions</h2>
        <div className="form__row">
          <div className="form__group">
            <label className="form__label" htmlFor="">Employer contributions</label>
            <input type="text" value="12%" className="form__input" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Standard</label>
            <input type="text" value="6%" className="form__input form__input--suffixed" />
            <span className="form__suffix">before tax</span>
          </div>
        </div>
        <div className="form__row">
          <div className="form__group">
            <label className="form__label" htmlFor="">Voluntary (before tax)</label>
            <input type="text" value="$150" className="form__input form__input--suffixed" />
            <span className="form__suffix">per month</span>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Voluntary (after tax)</label>
            <input type="text" value="$0" className="form__input form__input--suffixed" />
            <span className="form__suffix">per month</span>
          </div>
        </div>
      </div>
      <label className="form__label form__label--checkbox flat" htmlFor="includePartner">
        <input type="checkbox" id="includePartner" className="form__checkbox" onChange={() => props.onPartnerInclude()} />
        Include my partner
      </label>
      { props.includePartner ?
        <div className="form">
          <hr />
          <h2>About your partner</h2>
          <div className="form__row">
            <div className="form__group">
              <label className="form__label" htmlFor="">Gender</label>
              <select id="" name="" className="form__input form__input--select">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="">Age</label>
              <input type="text" className="form__input" />
            </div>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Annual salary (before tax)</label>
            <input type="text" value={props.partnerSalary} className="form__input form__input--suffixed" />
            <span className="form__suffix">per year</span>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Current super balance</label>
            <input type="text" value={props.partnerSuper} className="form__input" />
          </div>
          <h2>Your partner's contributions</h2>
          <div className="form__group">
            <label className="form__label" htmlFor="">Employer contributions</label>
            <input type="text" value="" className="form__input form__input--suffixed" />
            <span className="form__suffix">per month</span>
          </div>
          <label className="form__label" htmlFor="">Does your partner make voluntary contributions?</label>
          <div className="form__options">
            <label className="form__label form__label--radio" htmlFor="includePartnerVol" onChange={() => setIncludePartnerVoluntary('yes')}>
              <input type="radio" value="yes" checked={includePartnerVoluntary === 'yes'} id="includePartnerVol" className="form__checkbox" />
              Yes
            </label>
            <label className="form__label form__label--radio" htmlFor="excludePartnerVol" onChange={() => setIncludePartnerVoluntary('no')}>
              <input type="radio" value="no" checked={includePartnerVoluntary === 'no'} id="excludePartnerVol" className="form__checkbox" />
              No
            </label>
          </div>
          { includePartnerVoluntary === 'yes' ?
            <div>
              <div className="form__group">
                <label className="form__label" htmlFor="">Voluntary (before tax)</label>
                <input type="text" value="" className="form__input" />
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="">Voluntary (after tax)</label>
                <input type="text" value="" className="form__input" />
              </div>
            </div>
          : null }
        </div>
        : null }
    </div>
  )
}

export default AboutYou
