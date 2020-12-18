import React from 'react'

import NumberFormat from 'react-number-format'

function ContentPremium(props) {
  return (
    <div>
      <h2 className="flat">Premium retirement</h2>
      <p>
        <NumberFormat
          value={props.income}
          displayType={'text'}
          thousandSeparator={true}
          prefix={'$'} />
        <span>&nbsp;</span>anually
      </p>
      <p>A premium retirement lifestyle enables an older, healthy retiree to have a good standard of living through the purchase of such things as:</p>
      <h3>Available lifestyle</h3>
      <ul>
        <li>Full home renovation</li>
        <li>High end, larger number of appliances</li>
        <li>Fully air conditioned house and maintain swimming pool</li>
        <li>Dines in expensive a la carte restaurants</li>
        <li>NBN Fast internet connection, big data allowance</li>
        <li>Designer clothes</li>
        <li>Business class flights</li>
        <li>Top level private health insurance</li>
        <li>New car every 3-5 years</li>
        <li>Member of exclusive groups</li>
      </ul>
    </div>
  )
}

export default ContentPremium
