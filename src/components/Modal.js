import React from 'react';

import ModalGoals from './ModalGoals'
import ModalIncome from './ModalIncome'
import ModalSimple from './ModalSimple'
import ModalModest from './ModalModest'
import ModalComfortable from './ModalComfortable'
import ModalPremium from './ModalPremium'

function Modal(props) {
  return (
    <div className={`Modal ${props.open ? 'Modal--open' : ''}`}>
      {
        {
          'goals': <ModalGoals onDismiss={props.onDismiss} />,
          'income': <ModalIncome onDismiss={props.onDismiss} />,
          'simple': <ModalSimple onDismiss={props.onDismiss} />,
          'modest': <ModalModest onDismiss={props.onDismiss} />,
          'comfy': <ModalComfortable onDismiss={props.onDismiss} />,
          'premium': <ModalPremium onDismiss={props.onDismiss} />
        }[props.active]
      }
    </div>
  )
}

export default Modal
