import React from 'react'

function Performance_child({image,model}) {
  return (
    <>
      <div className="model_content">
        <div className={image}>
        </div>
        <div className="model_text">
          <p>Discover the models</p>
          <h2>{model}</h2>
        </div>
      </div>
    </>
  )
}

export default Performance_child