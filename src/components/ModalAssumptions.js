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
          <p>These settings are assumptions which help us calculate your retirement age. They use defaults which are standard for the average person.</p>
          <h3>Age pension</h3>
          <div className="form__group">
            <label className="form__label" htmlFor="">Include the age pension?</label>
            <div className="form__options">
              <label className="form__label form__label--radio flat" htmlFor="includeAgePension">
                <input type="radio" value="yes" id="includeAgePension" checked={true} name="agePension" className="form__checkbox" />
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
                <input type="radio" value="yes" id="willOwnHome" checked={true} name="ownHome" className="form__checkbox" />
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
