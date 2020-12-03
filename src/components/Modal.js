import React, { useState  } from 'react';

import ModalComfortable from './ModalComfortable'
import ModalGoals from './ModalGoals'
import ModalIncome from './ModalIncome'

function Modal(props) {
  return (
    <div className={`Modal ${props.open ? 'Modal--open' : ''}`}>
      {
        {
          'goals': <ModalGoals onDismiss={props.onDismiss} />,
          'comfy': <ModalComfortable onDismiss={props.onDismiss} />,
          'income': <ModalIncome onDismiss={props.onDismiss} />
        }[props.active]
      }
    </div>
  )
}

export default Modal
