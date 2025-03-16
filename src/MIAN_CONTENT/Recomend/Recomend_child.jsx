import React from 'react'

function Recomend_child({ stars, celebrate, button, learn, classs })
{
  return (
    <>
      <div className={classs}>
        <div className='reccomend_banner'></div>
        <div className="reccomend_cover">
          <div className="banner_texts">
            <p>{stars}</p>
            <h1>{celebrate}</h1>
            <button className="blue_buttons">{button}</button>
            <a href="">{learn}</a>
          </div>
        </div>  
      </div>
    </>
  )
}

export default Recomend_child