import React, { useState } from 'react'

function FormToggle(props) {
  const [toggled, setToggled] = useState(false)
  return (
    <span onClick={() => setToggled(!toggled)} className="form__toggle">
      View as {toggled ? 'percentage' : 'total'}
    </span>
  )
}

export default FormToggle
