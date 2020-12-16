import React, { useState } from 'react'

function Tooltip(props) {
  const [open, setOpen] = useState(false)

  return (
    <div className="tooltip">
      <i className="far fa-question-circle tooltip__icon" onClick={() => setOpen(!open)}></i>
      <div className={`tooltip__content ${open ? 'tooltip__content--open' : ''}`}>
        {props.children}
        <footer className="tooltip__footer">
          <span className="btn btn--text" onClick={() => setOpen(!open)}>Got it</span>
        </footer>
      </div>
    </div>
  )
}

export default Tooltip
