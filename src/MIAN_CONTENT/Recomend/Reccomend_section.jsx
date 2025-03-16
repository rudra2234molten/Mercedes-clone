import React from 'react'
import Recomend_child from './Recomend_child'

let bannerArray = [
  { classs:'banner_image1',
    stars: '200,000 Stars on Indian roads.',
    celebrate: 'Celebrating the journey of excellence.',
    button:'Learn More'
  },
  { classs:'banner_image2',
    stars: 'Switch on to Stand out.',
    celebrate: 'The All new EQA',
    learn: 'Learn More',
    button:'Find available Cars'
  },
  { classs:'banner_image3',
    stars: 'Dynamic all the way.',
    celebrate: 'The new GLA',
    learn: 'Learn More',
    button:'Find available Cars'
  },
  { classs:'banner_image4',
    stars: "Here's to the heart.",
    celebrate: 'The all-new Mercedes-AMG C 63 S E Performance',
    button:'Learn More'
  },
  { classs:'banner_image5',
    stars: 'Explore our Online Store.',
    celebrate: 'Browse & Buy your Mercedes-Benz',
    button:'Find available Cars'
  },
  
]

function Reccomend_section() {
  return (
    <section className="reccomend_section_container">
      <h1>Our Recommendations.</h1>
      <div className="reccoment_banner_section flex">
        {bannerArray.map(data => (
          <Recomend_child stars={data.stars} celebrate={data.celebrate} button={data.button} learn={data.learn} classs={data.classs} />
        ))}
      </div>
    </section>
  )
}

export default Reccomend_section