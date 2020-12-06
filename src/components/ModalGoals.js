import React from 'react';

const options = [
  {
    id: 'holiday',
    text: 'Holiday',
    icon: 'plane-departure'
  },
  {
    id: 'inheritance',
    text: 'Inheritance',
    icon: 'sack-dollar'
  },
  {
    id: 'medical',
    text: 'Medical expense',
    icon: 'users-medical'
  },
  {
    id: 'car',
    text: 'New car',
    icon: 'car'
  },
  {
    id: 'house',
    text: "Kid's house deposit",
    icon: 'house'
  },
  {
    id: 'gift',
    text: 'Gift',
    icon: 'gift'
  }
]

function ModalComfortable(props) {

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
