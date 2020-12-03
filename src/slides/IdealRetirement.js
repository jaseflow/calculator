import React, { useState  } from 'react';

import Slider from 'react-rangeslider'

import 'react-rangeslider/lib/index.css'

function IdealRetirement() {

  const [ retireAge, setRetireAge ] = useState(66)

  const labels = {
    50: '50',
    80: '80'
  }

  function handleChange(val) {
    setRetireAge(val)
  }

  return (
    <div>
      <h2>Your ideal retirement</h2>
      <p>Your current combined income is $200,000 per year. When choosing a retirement income take into account whether you will own your own home or still have kids to support.</p>
      <div className="form__slider">
        <label htmlFor="" class="form__label form__label--spaced">
          Retirement age
          <strong>{retireAge}</strong>
        </label>
        <Slider
          min={50}
          max={80}
          labels={labels}
          tooltip={false}
          value={retireAge}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default IdealRetirement
