import React from 'react'

import NumberFormat from 'react-number-format'

function ContentComfy(props) {
  return (
    <div>
      <h2 class="flat">Comfortable retirement</h2>
      <p>
        <NumberFormat
          value={props.income}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'} />
        <span>&nbsp;</span>anually
      </p>
      <p>A comfortable retirement lifestyle enables an older, healthy retiree to have a good standard of living.</p>
      <h3>Available lifestyle</h3>
      <ul>
        <li>Replace kitchen and bathrrom over 20 years</li>
        <li>Better quality and larger number of household items and appliances and higher cost hairdressing</li>
        <li>Can run air conditioning</li>
        <li>Restaurant dining, good range & quality of food</li>
        <li>Fast internet connection, big data allowance and large talk and text allowance</li>
        <li>Good clothes</li>
        <li>Domestic and occasional overseas holiday</li>
        <li>Top level private health insurance</li>
        <li>Owning a reasonable car</li>
        <li>Take part in a range of regular leisure activities</li>
      </ul>
    </div>
  )
}

export default ContentComfy
