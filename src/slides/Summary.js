import React, { useState, useEffect } from 'react';

import Logo from '../Logo.svg';

function Summary(props) {
  return (
    <div className="Summary">
      <div className="Summary__hero">
        <img src={Logo} alt="" className="Summary__logo" />
        <h1 className="Summary__title">You're on track</h1>
        <p>You can retire at age 66 and earn $60,000 per year with a 70% likelihood of your money lasting till age 90</p>
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
