import React from 'react'
import Performance_child from './Performance_child'

let modelArray = [
  {
    image: 'car1',
    model: 'Limousine'
  },
  {
    image: 'car2',
    model: 'SUV Range'
  },
  {
    image: 'car3',
    model: 'Cabriolets/Roadsters'
  }
]

function Performance() {
  return (
    <>
      <section className="performance_main_container">
        <h1>The perfect blend of luxury, sportiness and <br /> performance: Discover our latest models</h1>
        <a href="">Discover all models</a><a href="">Discover Electric models</a>
        <div className="model_container flex">
          {modelArray.map(model => <Performance_child image={ model.image} model={model.model} />)}
        </div>
      </section>
    </>
  )
}

export default Performance