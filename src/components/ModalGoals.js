import React from 'react';

function ModalComfortable(props) {
  return (
    <div className="Modal__card">
      <div className="Modal__content Modal__content--tight">
        <ul className="Modal__list">
          <li className="btn btn--tertiary btn--block">
            <i className="fa fa-plane-departure"></i>
            Holiday
          </li>
          <li className="btn btn--tertiary btn--block">
            <i className="fa fa-sack-dollar"></i>
            Inheritance
          </li>
          <li className="btn btn--tertiary btn--block">
            <i className="fa fa-users-medical"></i>
            Medical Expense
          </li>
          <li className="btn btn--tertiary btn--block">
            <i className="fa fa-car"></i>
            New car
          </li>
          <li className="btn btn--tertiary btn--block">
            <i className="fa fa-house"></i>
            Kid's house deposit
          </li>
          <li className="btn btn--tertiary btn--block">
            <i className="fa fa-gift"></i>
            Gift
          </li>
          <li className="btn btn--tertiary btn--block">
            <i className="fa fa-plus"></i>
            Add your own
          </li>
        </ul>
      </div>
      <footer className="Modal__footer">
        <button className="btn btn--secondary" onClick={props.onDismiss}>Cancel</button>
      </footer>
    </div>
  )
}

export default ModalComfortable
