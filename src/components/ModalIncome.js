import React from 'react';

const options = [
  {
    id: 'shares',
    text: 'Shares or managed funds',
    icon: 'chart-line'
  },
  {
    id: 'cash',
    text: 'Cash',
    icon: 'dollar'
  },
  {
    id: 'investment',
    text: 'Investment property',
    icon: 'house'
  }
]

function ModalIncome(props) {

  const optionsList = options.map((o) => {
    return (
      <li className="btn btn--tertiary btn--block" key={`option-${o.id}`} onClick={() => props.onOptionClick(o)}>
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
          <li className="btn btn--tertiary btn--block" id="other">
            <i className="fa fa-coins"></i>
            Other
          </li>
        </ul>
      </div>
      <footer className="Modal__footer">
        <button className="btn btn--secondary" onClick={props.onDismiss}>Cancel</button>
      </footer>
    </div>
  )
}

export default ModalIncome
