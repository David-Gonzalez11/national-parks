import React from "react"

const HeroImage = () => {
  return (
    <div className="hero">
      <img
        src="https://reneeroaming.com/wp-content/uploads/2020/08/Map-to-visit-every-national-park-1024x711.png"
        alt="hero-img"
        className="hero-img"
      />
      <div className="overlay">
        <p>
          <strong>
            <h3>Asian American & Pacific Islander Month</h3>
          </strong>
        </p>
        <p>
          <strong>
            <h3>Sharing Heritage & history</h3>
          </strong>
        </p>
        <button className="overlay-button">Find Stories & Places</button>
      </div>
    </div>
  )
}

export default HeroImage
