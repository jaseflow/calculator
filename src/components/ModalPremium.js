import React from 'react';

function ModalPremium(props) {
  return (
    <div class="Modal__card Modal__card--scrollable">
      <div className="Modal__scroll">
        <div className="Modal__hero"></div>
        <div className="Modal__content">
          <h2 class="flat">Premium retirement</h2>
          <p>$100,000 pa</p>
          <p>A premium retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:</p>
          <h3>Available lifestyle</h3>
          <ul>
            <li>A reasonable car</li>
            <li>Occasional international travel</li>
            <li>Private health</li>
          </ul>
        </div>
      </div>
      <footer class="Modal__footer">
        <button class="btn btn--secondary" onClick={props.onDismiss}>Okay, got it</button>
      </footer>
    </div>
  )
}

export default ModalPremium
