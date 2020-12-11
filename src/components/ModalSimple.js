import React from 'react';

import SimpleHero from '../simple.jpg'

import NumberFormat from 'react-number-format'

function ModalSimple(props) {
  return (
    <div class="Modal__card Modal__card--scrollable">
      <div className="Modal__scroll">
        <div className="Modal__hero" style={{ backgroundImage: `url(${SimpleHero})` }}></div>
        <div className="Modal__content">
          <h2 class="flat">Simple retirement</h2>
          <p>
            <NumberFormat
            value={props.income}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} />
          </p>
          <p>The Age Pension is a fortnightly payment to eligible Australians that can help provide an income if you do not have engouh financial resources (such as super) to retire.</p>
          <h3>Available lifestyle</h3>
          <ul>
            <li>No budget to fix home problems like a leaky roof</li>
            <li>Less frequent hair cuts or getting a friend to cut your hair</li>
            <li>Less heating in winter</li>
            <li>Only club special meals or inexpensive takeaway</li>
            <li>Very basic phone and internet package</li>
            <li>Basic clothes</li>
            <li>Even shorter breaks or day trips in your own city</li>
            <li>No private health insurance</li>
            <li>No car or, if you have a car it will be a struggle to afford repairs</li>
            <li>Only taking part in no cost or very low cost leisure activities. Rare trips to the cinema.</li>
          </ul>
        </div>
      </div>
      <footer class="Modal__footer">
        <button class="btn btn--secondary" onClick={props.onDismiss}>Okay, got it</button>
      </footer>
    </div>
  )
}

export default ModalSimple
