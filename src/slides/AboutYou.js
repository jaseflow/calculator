import React, { useState, useEffect } from 'react';

import CurrencyInput from 'react-currency-input-field'

function AboutYou(props) {

  return (
    <div>
      <h2>About you</h2>
      <div className="Alert">
        <p className="flat">You will notice we have prefilled information we already know about you.</p>
      </div>
      <div className="form">
        <div className="form__row">
          <div className="form__group">
            <label className="form__label" htmlFor="">Gender</label>
            <div className="form__select">
              <select id="" name="" className="form__input form__input--prefilled form__input--select">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </div>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Age</label>
            <input type="text" value={props.age} className="form__input form__input--prefilled" onChange={(val) => props.onSetAge(val)} />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="super">Current super balance</label>
          <CurrencyInput
            id="super"
            prefix="$"
            className="form__input form__input--prefilled form__input--suffixed"
            allowDecimals={false}
            defaultValue={props.superBalance}
            onChange={(val) => props.onSetSuper(val)}
          />
          <span className="form__suffix">as of 21 Nov 2020</span>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="slary">Annual salary (before tax)</label>
          <CurrencyInput
            id="salary"
            prefix="$"
            className="form__input form__input--prefilled"
            allowDecimals={false}
            defaultValue={props.salary}
            onChange={(val) => props.onSetSalary(val)}
          />
        </div>
        <h2>Contributions</h2>
        <div className="form__row--desktop">
          <div className="form__group">
            <label className="form__label" htmlFor="">Employer contributions</label>
            <input type="text" value="12%" className="form__input form__input--prefilled" />
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Standard</label>
            <input type="text" value="6%" className="form__input form__input--prefilled form__input--suffixed" />
            <span className="form__suffix">before tax</span>
          </div>
        </div>
        <div className="form__row">
          <div className="form__group">
            <label className="form__label" htmlFor="contributions">Voluntary (before tax)</label>
            <CurrencyInput
              id="contributions"
              prefix="$"
              className="form__input form__input--prefilled"
              allowDecimals={false}
              defaultValue={props.contributions}
              onChange={(val) => props.onSetContributions(val)}
            />
            <span className="form__suffix">per month</span>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Voluntary (after tax)</label>
            <input type="text" value="$0" className="form__input form__input--prefilled form__input--suffixed" />
            <span className="form__suffix">per month</span>
          </div>
        </div>
      </div>
      <label className="form__label form__label--checkbox flat" htmlFor="includePartner">
        <input type="checkbox" id="includePartner" className="form__checkbox" onChange={() => props.onPartnerInclude()} />
        Include my partner
      </label>
      { props.includePartner ?
        <div className="form" id="partner">
          <hr />
          <h2>About your partner</h2>
          <div className="form__row">
            <div className="form__group">
              <label className="form__label" htmlFor="">Gender</label>
              <div className="form__select">
                <select id="" name="" className="form__input form__input--select">
                  <option value="">Male</option>
                  <option value="">Female</option>
                </select>
              </div>
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="">Age</label>
              <input type="text" className="form__input" />
            </div>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Annual salary (before tax)</label>
            <CurrencyInput
              id="partner-salary"
              prefix="$"
              className="form__input"
              allowDecimals={false}
              defaultValue={props.partnerSalary}
              onChange={(val) => props.onSetPartnerSalary(val)}
            />
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
          <div className="form__group">
            <label className="form__label" htmlFor="">Does your partner make voluntary contributions?</label>
            <div className="form__options">
              <label className="form__label form__label--radio" htmlFor="includePartnerVol" onChange={() => props.onIncludePartnerVoluntary('yes')}>
                <input type="radio" value="yes" checked={props.includePartnerVoluntary === 'yes'} id="includePartnerVol" className="form__checkbox" />
                Yes
              </label>
              <label className="form__label form__label--radio" htmlFor="excludePartnerVol" onChange={() => props.onIncludePartnerVoluntary('no')}>
                <input type="radio" value="no" checked={props.includePartnerVoluntary === 'no'} id="excludePartnerVol" className="form__checkbox" />
                No
              </label>
            </div>
          </div>
          { props.includePartnerVoluntary === 'yes' ?
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
