import React from 'react';

function ModalDisclaimer(props) {

  return (
    <div className="Modal__card">
      <div className="Modal__content">
        <h2>Disclaimer</h2>
        <p>Adipisicing dolorem in deserunt fuga culpa. Rem esse vel eum ratione ipsa non similique excepturi Vel deserunt accusamus provident eaque facere. Eos incidunt sed dignissimos accusantium saepe! Accusamus in eaque</p>
        <p>Elit perferendis nemo facere facilis eaque repellat nobis vitae. Accusamus sunt nisi error quisquam neque mollitia Doloremque iure reiciendis natus aliquid adipisci Quo excepturi provident doloremque culpa iste? Eaque voluptatem</p>
        <hr class="hr-double" />
        <label className="form__label form__label--checkbox form__label--clear flat" htmlFor="acceptDisc">
          <input type="checkbox" checked={props.acceptedDisc} id="acceptDisc" className="form__checkbox" onChange={props.onAcceptDisc} />
          I have read and understand this disclaimer and the assumptions and limitations outlined.
        </label>
      </div>
      <footer className="Modal__footer">
        <button disabled={!props.acceptedDisc} className="btn btn--secondary" onClick={props.onContinueDisc}>Continue</button>
      </footer>
    </div>
  )
}

export default ModalDisclaimer
