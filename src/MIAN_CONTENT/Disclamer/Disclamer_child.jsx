import React from 'react'

function Disclamer_child({titlee,line,symbol}) {
  return (
    <>
      <div className="disclimer_banner flex">
        <i className={symbol}></i>
        <div className="disclimer_banner_text">
          <h4>{titlee }</h4>
          <p>{line}</p>
        </div>
        <i class="ri-arrow-right-line"></i>
      </div>
    </>
  )
}

export default Disclamer_child