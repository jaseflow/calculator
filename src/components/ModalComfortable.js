import React from 'react';

import ComfyHero from '../comfy.jpg'

import NumberFormat from 'react-number-format'

function ModalComfortable(props) {
  return (
    <div class="Modal__card Modal__card--scrollable">
      <div className="Modal__scroll">
        <div className="Modal__hero" style={{ backgroundImage: `url(${ComfyHero})` }}></div>
        <div className="Modal__content">
          <h2 class="flat">Comfortable retirement</h2>
          <NumberFormat
          value={props.income}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'} />
          <p>A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:</p>
          <h3>Available lifestyle</h3>
          <ul>
            <li>Replace kitchen and bathrrom over 20 years</li>
            <li>Better quality and larger number of household items and appliances and higher cost hairdressing</li>
            <li>Can run air conditioning</li>
            <li>Restaurant dining, good range & quality of food</li>
            <li>Fast internet connection, big data allowance and large talk and text allowance</li>
            <li>Good clothes</li>
            <li>Domestic and occasional overseas holiday</li>
            <li>Top level private health insurance</li>
            <li>Owning a reasonable car</li>
            <li>Take part in a range of regular leisure activities</li>
          </ul>
        </div>
      </div>
      <footer class="Modal__footer">
        <button class="btn btn--secondary" onClick={props.onDismiss}>Okay, got it</button>
      </footer>
    </div>
  )
}

export default ModalComfortable
