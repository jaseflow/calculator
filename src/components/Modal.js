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
          'goals': <ModalGoals onOptionClick={(val) => props.onGoalClick(val)} onDismiss={props.onDismiss} />,
          'income': <ModalIncome onOptionClick={(val) => props.onIncomeClick(val) } onDismiss={props.onDismiss} />,
          'simple': <ModalSimple income={props.simpleIncome} onDismiss={props.onDismiss} />,
          'modest': <ModalModest income={props.modestIncome} onDismiss={props.onDismiss} />,
          'comfy': <ModalComfortable income={props.comfyIncome} onDismiss={props.onDismiss} />,
          'premium': <ModalPremium income={props.premiumIncome} onDismiss={props.onDismiss} />
        }[props.active]
      }
    </div>
  )
}

export default Modal
