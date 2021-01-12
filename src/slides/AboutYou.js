import React from 'react';

import Switch from 'react-switch'

import CurrencyInput from 'react-currency-input-field'

function AboutYou(props) {

  const otherFundsList = props.otherFunds.map((fund, i) => {
    return (
      <div className="form__row--desktop">
        <div className="form__group">
          <label className="form__label" htmlFor="">
            Balance of other fund #{i + 1}
          </label>
          <CurrencyInput
            prefix="$"
            className="form__input"
            allowDecimals={false}
            defaultValue={fund.balance}
            placeholder="Enter balance"
            onChange={(val) => props.onSetOtherFundBalance(val, i)}
          />
        </div>
        <div className="form__group">
          <label className="form__label form__label--toggle" htmlFor="">
            <span>Name of other fund #{i + 1} (optional)</span>
            {i > 0 && 
              <span className="link" onClick={() => props.onRemoveOtherFund(i)}>Remove fund</span>
            }
          </label>
          <input type="text" value={fund.name} className="form__input" placeholder="Enter fund name" onChange={(e) => props.onSetOtherFundName(e.target.value, i)}/>
        </div>
      </div>
    )
  })

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
              <select id="" name="" className="form__input form__input--prefilled" defaultValue="male">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="">Age</label>
            <input type="text" value={props.age} className="form__input form__input--prefilled" />
          </div>
        </div>
        <div className="form__group">
          <label className="form__label" htmlFor="super">Current LGIAsuper super balance</label>
          <CurrencyInput
            id="super"
            prefix="$"
            className="form__input form__input--prefilled form__input--suffixed"
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
              Yes
            </label>
            <label className="form__label form__label--radio flat" htmlFor="noOtherSuper" onChange={() => props.onIncludeOtherSuper('no')}>
              <input type="radio" value="no" checked={props.hasOtherSuper === 'no'} id="noOtherSuper" className="form__checkbox" />
              No
            </label>
          </div>
        </div>
        { props.hasOtherSuper === 'yes' &&
          <div hidden>
            <p>Did you know you having multiple super accounts costs you thousand of dollars in fees? <a href="https://memberonline.lgiasuper.com.au/find-my-super/declaration-and-consent">Consolidate now</a></p>
            <div className="form__group">
              {otherFundsList}
              <button className="form__label form__label--checkbox" htmlFor="includePartner" onClick={() => props.onAddOtherFund()}>
                <i className="fa fa-plus"></i>
                Add another fund
              </button>
            </div>
          </div>
        }
        <div className="form__group">
          <label className="form__label" htmlFor="slary">Annual salary (before tax)</label>
          <CurrencyInput
            id="salary"
            prefix="$"
            className="form__input form__input--prefilled"
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
            <input type="text" value={props.employerContributions} className="form__input form__input--prefilled" />
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
            <input type="text" value={props.memberContributions} className="form__input form__input--prefilled form__input--suffixed" />
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
              className="form__input form__input--prefilled"
              allowDecimals={false}
              defaultValue={props.volContributions}
              onChange={(val) => props.onSetVolContributions(val)}
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
              <input type="text" value={props.partnerEmployerContributions} className="form__input" />
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
              <input type="text" value={props.partnerMemberContributions} className="form__input form__input--suffixed" />
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
                Yes
              </label>
              <label className="form__label form__label--radio" htmlFor="excludePartnerVol" onChange={() => props.onIncludePartnerVoluntary('no')}>
                <input type="radio" value="no" checked={props.includePartnerVoluntary === 'no'} id="excludePartnerVol" className="form__checkbox" />
                No
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
