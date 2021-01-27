import React from 'react';

import Switch from 'react-switch'

import CurrencyInput from 'react-currency-input-field'
import NumberFormat from 'react-number-format'

function AboutYou(props) {

  return (
    <div className="AboutYou">
      <h2>About you</h2>
      <div className="Alert">
        <p className="flat">You will notice we have prefilled information we already know about you.</p>
      </div>
      <div className="form">
        <div className="form__row">
          <div className="form__group">
            <label className="form__label" htmlFor="">Gender</label>
            <div className="form__select">
              <select id="" name="" className="form__input " defaultValue="male">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Age</label>
            <input type="text" value={props.age} className="form__input " />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="super">Current LGIAsuper super balance</label>
          <CurrencyInput
            id="super"
            prefix="$"
            className="form__input  form__input--suffixed"
            allowDecimals={false}
            disabled={true}
            defaultValue={props.superBalance}
            onChange={(val) => props.onSetSuper(val)}
          />
          <span className="form__suffix">as of 21 Nov 2020</span>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="">Do you have a super balance in any other funds?</label>
          <div className="form__options">
            <label className="form__label form__label--radio flat" htmlFor="hasOtherSuper" onChange={() => props.onIncludeOtherSuper('yes')}>
              <input type="radio" value="yes" checked={props.hasOtherSuper === 'yes'} id="hasOtherSuper" className="form__checkbox" />
              <span>Yes</span>
            </label>
            <label className="form__label form__label--radio flat" htmlFor="noOtherSuper" onChange={() => props.onIncludeOtherSuper('no')}>
              <input type="radio" value="no" checked={props.hasOtherSuper === 'no'} id="noOtherSuper" className="form__checkbox" />
              <span>No</span>
            </label>
          </div>
        </div>
        { props.hasOtherSuper === 'yes' &&
          <div className="form__group">
            <label className="form__label" htmlFor="">
              Balance of all other funds
            </label>
            <CurrencyInput
              prefix="$"
              className="form__input"
              allowDecimals={false}
              placeholder="Enter balance"
              onChange={(val) => props.onSetOtherFundsBalance(val)}
            />
          </div>
        }
        <div className="form__group">
          <label className="form__label" htmlFor="slary">Annual salary (before tax)</label>
          <CurrencyInput
            id="salary"
            prefix="$"
            className="form__input "
            disabled={true}
            allowDecimals={false}
            defaultValue={props.salary}
            onChange={(val) => props.onSetSalary(val)}
          />
        </div>
        <h2 className="AboutYou__contributions">
          Contributions
          <div className="form__switch">
            Percentage
            <Switch className="Switch" uncheckedIcon={false} checkedIcon={false} onChange={(val) => props.onSetViewTotals(val)} checked={props.viewTotals} />
            Totals
          </div>
        </h2>
        <div className="form__row--desktop">
          <div className="form__group">
            <label className="form__label form__label--toggle" htmlFor="">
              Employer contributions
            </label>
            <input type="text" value={props.employerContributions} className="form__input " />
            { props.viewTotals ?
              <span className="form__suffix">per month</span>
              :
              <span className="form__suffix">of salary per month</span>
            }
          </div>
          <div className="form__group">
            <label className="form__label form__label--toggle" htmlFor="">
              Standard Member contributions
            </label>
            <input type="text" value={props.memberContributions} className="form__input  form__input--suffixed" />
            { props.viewTotals ?
              <span className="form__suffix">per month</span>
              :
              <span className="form__suffix">of salary per month</span>
            }
          </div>
        </div>
        <div className="form__row">
          <div className="form__group">
            <label className="form__label" htmlFor="contributions">Voluntary (before tax)</label>
            <CurrencyInput
              id="contributions"
              prefix="$"
              className="form__input "
              allowDecimals={false}
              defaultValue={props.volContributions}
              onChange={(val) => props.onSetVolContributions(val)}
            />
            <span className="form__suffix">per month</span>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Voluntary (after tax)</label>
            <input type="text" value="$0" className="form__input  form__input--suffixed" />
            <span className="form__suffix">per month</span>
          </div>
        </div>
      </div>
      <label className="form__label form__label--checkbox flat" htmlFor="includePartner">
        <input type="checkbox" checked={props.includePartner} id="includePartner" className="form__checkbox" onChange={() => props.onPartnerInclude()} />
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
            <label className="form__label" htmlFor="">Current super balance (All funds)</label>
            <input type="text" value={props.partnerSuper} className="form__input" />
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
          <h2 className="AboutYou__contributions">
            Your partner's contributions
          </h2>
          <div className="form__row--desktop">
            <div className="form__group">
              <label className="form__label form__label--suffixed" htmlFor="">
                Employer contributions
              </label>
              <input type="text" value={props.partnerEmployerContributions} className="form__input" defaultValue="12%" />
              { props.viewTotals ?
                <span className="form__suffix">per month</span>
                :
                <span className="form__suffix">of salary per month</span>
              }
            </div>
            <div className="form__group">
              <label className="form__label form__label--toggle" htmlFor="">
                Standard Member contributions
              </label>
              <input type="text" value={props.partnerMemberContributions} className="form__input form__input--suffixed" defaultValue="6%" />
              { props.viewTotals ?
                <span className="form__suffix">per month</span>
                :
                <span className="form__suffix">of salary per month</span>
              }
            </div>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Does your partner make voluntary contributions?</label>
            <div className="form__options">
              <label className="form__label form__label--radio" htmlFor="includePartnerVol" onChange={() => props.onIncludePartnerVoluntary('yes')}>
                <input type="radio" value="yes" checked={props.includePartnerVoluntary === 'yes'} id="includePartnerVol" className="form__checkbox" />
                <span>Yes</span>
              </label>
              <label className="form__label form__label--radio" htmlFor="excludePartnerVol" onChange={() => props.onIncludePartnerVoluntary('no')}>
                <input type="radio" value="no" checked={props.includePartnerVoluntary === 'no'} id="excludePartnerVol" className="form__checkbox" />
                <span>No</span>
              </label>
            </div>
          </div>
          { props.includePartnerVoluntary === 'yes' ?
            <div className="form__row--desktop">
              <div className="form__group">
                <label className="form__label" htmlFor="">Voluntary (before tax)</label>
                <input type="text" value="" className="form__input form__input--suffixed" placeholder="Enter amount" />
                <span className="form__suffix">per month</span>
              </div>
              <div className="form__group">
                <label className="form__label" htmlFor="">Voluntary (after tax)</label>
                <input type="text" value="" className="form__input form__input--suffixed" placeholder="Enter amount" />
                <span className="form__suffix">per month</span>
              </div>
            </div>
          : null }
        </div>
        : null }
    </div>
  )
}

export default AboutYou
