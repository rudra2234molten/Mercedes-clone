import React from 'react'

function History() {
  return (
    <>
      <section className="history_main_container">
        <div className="history_top flex">
                <div className="history_image1"></div>
          <article className="history_text">
            <h1>DEFINING CLASS since 1886.</h1>
            <p>A lot has changed since the invention of the automobile in 1886. <br /> With each decade, we have been able to further develop the <br /> technology that began with us - and still do today. This is how a <br /> car became more than a car.</p>
            <button className="blue_buttons">Learn more</button>
          </article>
        </div><br /><br />
        <div className="history_bottom flex">
          <article className="history_text">
            <h1>History and brand world.</h1>
            <p>The Mercedes star is more than just a logo. Mercedes-Benz <br /> stands for exciting experiences based on timeless design, cutting-edge technology and attention to detail.</p>
            <button className="blue_buttons">Learn more</button>
          </article>
          <div className="history_image2"></div>
        </div>
      </section>
    </>
  )
}

export default History