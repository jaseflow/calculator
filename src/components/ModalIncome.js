import React from 'react';

function ModalIncome(props) {
  return (
    <div className="Modal__card">
      <div className="Modal__content Modal__content--tight">
        <ul class="Modal__list">
          <li class="btn btn--tertiary btn--block">
            Shares or managed funds
          </li>
          <li class="btn btn--tertiary btn--block">
            Cash
          </li>
          <li class="btn btn--tertiary btn--block">
            Investment property
          </li>
          <li class="btn btn--tertiary btn--block">
            Other
          </li>
        </ul>
      </div>
      <footer class="Modal__footer">
        <button class="btn btn--secondary" onClick={props.onDismiss}>Cancel</button>
      </footer>
    </div>
  )
}

export default ModalIncome
