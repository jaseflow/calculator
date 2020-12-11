import React from 'react';

import goals from '../resources/goals'

function ModalComfortable(props) {

  const optionsList = goals.map((o) => {
    return (
      <li className="Modal__option" key={`option-${o.id}`} onClick={() => props.onOptionClick(o)}>
        <i className={`fa fa-${o.icon}`}></i>
        {o.text}
      </li>
    )
  })

  return (
    <div className="Modal__card">
      <div className="Modal__content Modal__content--tight">
        <ul className="Modal__list">
          {optionsList}
          <li className="Modal__option">
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
