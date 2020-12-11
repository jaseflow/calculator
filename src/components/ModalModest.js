import React from 'react';

import ModestHero from '../modest.jpg'

import NumberFormat from 'react-number-format'

function ModalModest(props) {
  return (
    <div class="Modal__card Modal__card--scrollable">
      <div className="Modal__scroll">
        <div className="Modal__hero" style={{ backgroundImage: `url(${ModestHero})` }}></div>
        <div className="Modal__content">
          <h2 class="flat">Modest retirement</h2>
          <p>
            <NumberFormat
            value={props.income}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'$'} />
          </p>
          <p>A modest retirement lifestyle is still considered better than the Age Pension, but still only able to afford fairly basic activities.</p>
          <h3>Available lifestyle</h3>
          <ul>
            <li>No budget for home improvements. Can do minor repairs.</li>
            <li>Limited number of household items and appliances and budget haircuts.</li>
            <li>Need to watch utility costs</li>
            <li>Take out and osional cheap restaurants</li>
            <li>Limited talk and text, modest internet data allowance</li>
            <li>Reasonable clothes</li>
            <li>One holiday in Australia or a few short breaks</li>
            <li>Basic private health insurance, limited gap payments</li>
            <li>Owning a cheaper more basic car</li>
            <li>One leisure activity infrequently, some trips to the cinema or the like</li>
          </ul>
        </div>
      </div>
      <footer class="Modal__footer">
        <button class="btn btn--secondary" onClick={props.onDismiss}>Okay, got it</button>
      </footer>
    </div>
  )
}

export default ModalModest
