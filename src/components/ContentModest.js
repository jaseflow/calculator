import React from 'react'

import NumberFormat from 'react-number-format'

function ContentModest(props) {
  return (
    <div>
      <h2 className="flat">Modest retirement</h2>
      <p>
        <NumberFormat
          value={props.income}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'} />
        <span>&nbsp;</span>anually
      </p>
      <p>A modest retirement lifestyle is still considered better than the Age Pension, but still only able to afford fairly basic activities.</p>
      <h3>Available lifestyle</h3>
      <ul>
        <li>No budget for home improvements. Can do minor repairs.</li>
        <li>Limited number of household items and appliances and budget haircuts.</li>
        <li>Need to watch utility costs</li>
        <li>Take out and osional cheap restaurants</li>
        <li>Limited talk and text, modest internet data allowance</li>
        <li>Reasonable clothes</li>
        <li>One holiday in Australia or a few short breaks</li>
        <li>Basic private health insurance, limited gap payments</li>
        <li>Owning a cheaper more basic car</li>
        <li>One leisure activity infrequently, some trips to the cinema or the like</li>
      </ul>
    </div>
  )
}

export default ContentModest
