import React from 'react';

import CurrencyInput from 'react-currency-input-field'
import NumberFormat from 'react-number-format'

import repairs from '../icons/green/9.png'
import appliances from '../icons/green/2.png'
import utility from '../icons/green/1.png'
import food from '../icons/green/3.png'
import phone from '../icons/green/4.png'
import clothes from '../icons/green/5.png'
import travel from '../icons/green/6.png'
import health from '../icons/green/7.png'
import car from '../icons/green/8.png'
import leisure from '../icons/green/10.png'

import asfa from '../asfa.png'
import lgia from '../inline.png'

function IdealRetirementDesktop(props) {

  return (
    <div className="IdealRetirement">
      <p>Your current income is <NumberFormat value={props.income} displayType={'text'} thousandSeperator={true} prefix={'$'} /> per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support.</p>
      <h2>Standard retirement incomes</h2>
      <table className="RetirementPlans">
        <thead>
          <tr>
            <th></th>
            <th>
              <div>
                <img src={asfa} alt="" />
              </div>
              <h3 className="flat">Modest</h3>
              <p>
                <NumberFormat
                  value={props.modestIncome}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                /> 
                &nbsp;yearly income
                {props.includePartner ?
                  <i className="fas fa-user-friends Plan__person"></i>
                  :
                  <i className="fas fa-user Plan__person"></i>
                }
              </p>
              <button
                className={`btn btn--secondary ${props.activePlan === 'modest' ? 'selected' : ''}`}
                onClick={() => props.onSetPlan('modest')} >
                {props.activePlan === 'modest' ? 'Selected' : 'Select'}
              </button>
            </th>
            <th>
              <div>
                <img src={asfa} alt="" />
              </div>
              <h3 className="flat">Comfortable</h3>
              <p>
                <NumberFormat
                  value={props.comfyIncome}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                /> 
                &nbsp;yearly income
                {props.includePartner ?
                  <i className="fas fa-user-friends Plan__person"></i>
                  :
                  <i className="fas fa-user Plan__person"></i>
                }
              </p>
              <button
                className={`btn btn--secondary ${props.activePlan === 'comfy' ? 'selected' : ''}`}
                onClick={() => props.onSetPlan('comfy')} >
                {props.activePlan === 'comfy' ? 'Selected' : 'Select'}
              </button>
            </th>
            <th>
              <div>
                <img src={lgia} alt="" />
              </div>
              <h3 className="flat">Premium</h3>
              <p>
                <NumberFormat
                  value={props.premiumIncome}
                  displayType={'text'}
                  thousandSeparator={true}
                  prefix={'$'}
                /> 
                &nbsp;yearly income
                {props.includePartner ?
                  <i className="fas fa-user-friends Plan__person"></i>
                  :
                  <i className="fas fa-user Plan__person"></i>
                }
              </p>
              <button
                className={`btn btn--secondary ${props.activePlan === 'premium' ? 'selected' : ''}`}
                onClick={() => props.onSetPlan('premium')} >
                {props.activePlan === 'premium' ? 'Selected' : 'Select'}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={repairs} alt="" />
            </td>
            <td>
              No budget for home improvements. Can do maintenance repairs
            </td>
            <td>
              Replace kitchen and bathroom over 20 years
            </td>
            <td>
              Full home renovation
            </td>
          </tr>
          <tr>
            <td>
              <img src={appliances} alt="" />
            </td>
            <td>
              Limited number of household items and appliances
            </td>
            <td>
              Better quality, larger number of household items and appliances
            </td>
            <td>
              High end, larger number of appliances
            </td>
          </tr>
          <tr>
            <td>
              <img src={utility} alt="" />
            </td>
            <td>
              Need to watch utility costs
            </td>
            <td>
              Can run air conditioning
            </td>
            <td>
              Fully air conditioned house and maintain swimming pool
            </td>
          </tr>
          <tr>
            <td>
              <img src={food} alt="" />
            </td>
            <td>
              Take out and occasional cheap restaurants
            </td>
            <td>
              Restaurant dining, good range and quality of food
            </td>
            <td>
              Dines in expensive a la carte restaurants
            </td>
          </tr>
          <tr>
            <td>
              <img src={phone} alt="" />
            </td>
            <td>
              Limited talk and text, modest internet data allowance
            </td>
            <td>
              4G internet connection, big data large talk and text allowance
            </td>
            <td>
              NBN Fast internet connection, big data allowance
            </td>
          </tr>
          <tr>
            <td>
              <img src={clothes} alt="" />
            </td>
            <td>
              Reasonable clothes
            </td>
            <td>
              Good clothes
            </td>
            <td>
              Designer clothes
            </td>
          </tr>
          <tr>
            <td>
              <img src={travel} alt="" />
            </td>
            <td>
              One holiday in Australia or a few short breaks
            </td>
            <td>
              Domestic and occasional overseas holidays
            </td>
            <td>
              Business class flights
            </td>
          </tr>
          <tr>
            <td>
              <img src={health} alt="" />
            </td>
            <td>
              Basic private health insurance, limited gap payments
            </td>
            <td>
              Mid level private health insurance
            </td>
            <td>
              Top level private health insurance
            </td>
          </tr>
          <tr>
            <td>
              <img src={car} alt="" />
            </td>
            <td>
              Owning a cheaper more basic car
            </td>
            <td>
              Owning a reasonable car
            </td>
            <td>
              New car every 3-5 years
            </td>
          </tr>
          <tr>
            <td>
              <img src={leisure} alt="" />
            </td>
            <td>
              One leisure activity infrequently, some trips to the cinema or the like
            </td>
            <td>
              Take part in a range of regular leisure activities
            </td>
            <td>
              Member of exclusive clubs and groups
            </td>
          </tr>
        </tbody>
      </table>
      <h2>Have your own retirement income in mind?</h2>
      <div className="IdealRetirement__custom">
        <div className="form__group">
          <label className="form__label" htmlFor="super">Enter a custom amount</label>
          <CurrencyInput
            id="super"
            prefix="$"
            className="form__input form__input--suffixed"
            placeholder="Enter amount"
            allowDecimals={false}
            onChange={(val) => props.onSetCustomIncome(val)}
          />
          <span className="form__suffix">yearly income</span>
        </div>
      </div>
    </div>
  )
}

export default IdealRetirementDesktop
