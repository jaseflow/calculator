import React, { useState, useEffect } from 'react';

import Logo from '../Logo.svg';

function Summary(props) {
  return (
    <div className="Summary">
      <div className="Summary__hero">
        <img src={Logo} alt="" className="Summary__logo" />
        <h1 className="Summary__title">You're on track</h1>
        <p className="Summary__blurb">You can retire at <strong>age 66</strong> and earn <strong>$60,000</strong> per year with a <strong>70%</strong> likelihood of your money lasting till <strong>age 90</strong></p>
      </div>
      <div className="Summary__body">
        <div className="Summary__block">
          <h2>Get financial advice</h2>
          <p>Talk to one of our experienced financial advisers about designing a financial strategy.</p>
          <a href="#" class="btn btn--block"> Schedule an appointment</a>
        </div>
        <div className="Summary__block">
          <h2>Print a report</h2>
          <p>Generate a detailed report of your projection to use as reference at your next financial discussion.</p>
          <a href="#" class="btn btn--secondary">Save as PDF</a>
        </div>
      </div>
    </div>
  )
}

export default Summary
