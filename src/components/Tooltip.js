import React, { useState, useEffect } from 'react'

const classNames = require('classnames')

function Tooltip(props) {
  const [open, setOpen] = useState(false)

  const contentClasses = classNames({
    'tooltip__content': true,
    'tooltip__content--open': open,
    'tooltip__content--left': props.arrowPos === 'left',
    'tooltip__content--centered': props.arrowPos === 'center',
    'tooltip__content--right': props.arrowPos === 'right'
  })

  useEffect(() => {
    if(props.defaultOpen) {
      setOpen(true)
    }
  },[props.defaultOpen])

  return (
    <div className="tooltip">
      {!props.noIcon &&
        <i className="far fa-question-circle tooltip__icon" onClick={() => setOpen(!open)}></i>
      }
      <div 
        className={contentClasses}
        style={{top: `${props.topPos}px`, right: `${props.rightPos}px`}}
      >
        {props.children}
        <footer className="tooltip__footer">
          <span className="link" onClick={() => setOpen(!open)}>Got it</span>
        </footer>
      </div>
    </div>
  )
}

export default Tooltip
