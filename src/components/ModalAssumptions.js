import React from 'react';

import CurrencyInput from 'react-currency-input-field'
import Slider from 'react-rangeslider'
import NumberFormat from 'react-number-format'

function ModalAssumptions(props) {

  return (
    <div className="Modal__card Modal__card--scrollable assumptions">
      <div className="Modal__scroll">
        <div className="Modal__content">
          <h2>Settings</h2>
          <h3>Likelihood success</h3>
          <p className="double">Use the options below to change the likelihood of your results. Selecting a less likely outcome may lower the retirement age but less confidence is given with regards to the accuracy.</p>
          <table className="assumptions__likelihood">
            <thead>
              <th></th>
              <th>Label</th>
              <th>Range</th>
              <th>Default in tool</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <label className="form__label--radio" htmlFor="moderate">
                    <input type="radio" value="moderate" id="moderate" name="likelihood" checked={props.likelihood === 'moderate'} onChange={() => props.onSetLikelihood('moderate')} className="form__checkbox" />
                    <span></span>
                  </label>
                </td>
                <td>
                  <label htmlFor="moderate">Moderate</label>
                </td>
                <td>
                  <label htmlFor="moderate">50%-75%</label>
                </td>
                <td>
                  <label htmlFor="moderate">60%</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="form__label--radio" htmlFor="high">
                    <input type="radio" value="high" id="high" name="likelihood" className="form__checkbox" checked={props.likelihood === 'high'} onChange={() => props.onSetLikelihood('high')} />
                    <span></span>
                  </label>
                </td>
                <td>
                  <label htmlFor="high">High</label>
                </td>
                <td>
                  <label htmlFor="high">75%-85%</label>
                </td>
                <td>
                  <label htmlFor="high">80%</label>
                </td>
              </tr>
              <tr>
                <td>
                  <label className="form__label--radio" htmlFor="veryHigh">
                    <input type="radio" value="Very high" id="veryHigh" name="likelihood" checked={props.likelihood === 'very-high'} className="form__checkbox" onChange={() => props.onSetLikelihood('very-high')}/>
                    <span></span>
                  </label>
                </td>
                <td>
                  <label htmlFor="veryHigh">Very High</label>
                </td>
                <td>
                  <label htmlFor="veryHigh">85%-95%</label>
                </td>
                <td>
                  <label htmlFor="veryHigh">90%</label>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Age pension</h3>
          <div className="form__group">
            <label className="form__label" htmlFor="">Include the age pension?</label>
            <div className="form__options">
              <label className="form__label form__label--radio flat" htmlFor="includeAgePension">
                <input type="radio" value="yes" id="includeAgePension" defaultChecked={true} name="agePension" className="form__checkbox" />
                <span>Yes</span>
              </label>
              <label className="form__label form__label--radio flat" htmlFor="excludeAgePension">
                <input type="radio" value="no" id="excludeAgePension" name="agePension" className="form__checkbox" />
                <span>No</span>
              </label>
            </div>
          </div>
          <h3>Assets</h3>
          <div className="form__group">
            <label className="form__label" htmlFor="">Will you own your own home at retirement?</label>
            <div className="form__options">
              <label className="form__label form__label--radio flat" htmlFor="willOwnHome">
                <input type="radio" value="yes" id="willOwnHome" defaultChecked={true} name="ownHome" className="form__checkbox" />
                <span>Yes</span>
              </label>
              <label className="form__label form__label--radio flat" htmlFor="wontOwnHome">
                <input type="radio" value="no" id="wontOwnHome" name="ownHome" className="form__checkbox" />
                <span>No</span>
              </label>
            </div>
          </div>
          <div className="form__group">
            <label className="form__label" htmlFor="assets">Personal assets</label>
            <CurrencyInput
              id="assets"
              prefix="$"
              className="form__input"
              allowDecimals={false}
              defaultValue={25000}
            />
          </div>
          <h3>Inflation assumptions</h3>
          <div className="form__row">
            <div className="form__group">
              <label className="form__label" htmlFor="cpi">CPI inflation</label>
              <NumberFormat
                id="cpi"
                value={2.50}
                className="form__input"
                displayType={'input'}
                suffix={'%'} />
            </div>
            <div className="form__group">
              <label className="form__label" htmlFor="livingStandards">Rise in living standards</label>
              <NumberFormat
                id="livingStandards"
                value={1.50}
                className="form__input"
                displayType={'input'}
                suffix={'%'} />
            </div>
          </div>
        </div>
      </div>
      <footer className="Modal__footer">
        <button className="btn btn--secondary" onClick={props.onDismiss}>Done</button>
      </footer>
    </div>
  )
}

export default ModalAssumptions
