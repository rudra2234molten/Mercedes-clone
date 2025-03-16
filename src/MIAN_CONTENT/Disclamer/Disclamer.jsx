import React from 'react'
import Disclamer_child from './Disclamer_child'

let disclaimerArray = [
  {
    titlee: 'Mercedes-Benz-store',
    line: 'Discover your new mercedes',
    symbol: 'ri-shopping-cart-2-line'
  },
  {
    titlee: 'Declare locator',
    line:'Find a mercedes-benz declare',
    symbol:'ri-instance-line'
  },
  {
    titlee: 'Configurator',
    line:'Configure your vheicle now',
    symbol:'ri-taxi-wifi-line'
  },
  {
    titlee: 'Finance & insurance',
    line:'Find the right financial product for you',
    symbol:'ri-calculator-line'
  },

]

function Disclamer() {
  return (
    <>
      <br /><br /><br /><br />
      <section className="disclamer_main_container">
        <article className="disclamer_text">
          <h4>Disclaimer</h4>
          <p>Accessories, colors and fitments shown may not be a part of standard specifications. For detailed technical specification and price of the model available in India, please refer to the<br /> nearest Mercedes-Benz Franchise Partner.</p>
        </article>
        <div className="disclimer_banner_container flex">
          {disclaimerArray.map(text => (
            <Disclamer_child titlee={text.titlee} line={text.line} symbol={text.symbol } />
          ))}
        </div>
      </section><br /><br /><br />
    </>
  )
}

export default Disclamer