import React from 'react'

function Service() {
  return (
    <>
      <section className="service_main_container">
        <h1>Service and accessories.</h1>
        <div className="service_content_container flex">
          <div className="service_content1">
            <img src="https://www.mercedes-benz.co.in/content/dam/hq/passengercars/services/mercedes-me/imgLPtextmediammeid.jpg/1720157488638.jpg?im=Resize=(1280);Crop,rect=(0,280,1280,720)" alt="" />
            <h3>Digital extras for your Mercedes-Benz</h3>
            <p>Simply book additional digital extras and experience your Mercedes-Benz in a new way.</p>
            <button>Bye online now</button>
          </div>
          <div className="service_content2">
            <img src="https://www.mercedes-benz.co.in/content/dam/india/passengercars/maintenance/service-packages-image1.jpg/1720157898771.jpg?im=Resize=(1280);Crop,rect=(0,119,1280,720)" alt="" />
            <h3>Maintenance and Service</h3>
            <p>Enjoy Peace of Mind with Mercedes-Benz Service, Maintenance and Repair.</p>
            <button>Learn more</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Service