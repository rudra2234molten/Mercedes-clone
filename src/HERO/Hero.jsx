import React from 'react'

function Hero() {
  return (
    <>
      <section className="hero_container">
        <div className="hero_cover"></div>
        <video src="/src/assets/Designed_to_protect_you_-_Electric_safety_by_Mercedes-Benz(1080p).mp4" autoPlay muted loop>
        </video>
        <div className="hero_text">
          <h1>The all-new G 580 <br /> EDITION ONE</h1>
          <p>The Rise of Electric</p>
          <div className="hero_button">
            <button>Learn More</button>
            <button className='hero_buttonn blue_buttons'>Configure Now</button>
          </div>
        </div>
        <div className="fixed_chat">
          <i class="ri-chat-voice-fill"></i>
        </div>
      </section>
    </>
  )
}

export default Hero