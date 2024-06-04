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
            <h3 className="hero-text">Asian American & Pacific Islander Month</h3>
        </p>
        <p>
            <h1 className="hero-text">Sharing Heritage & history</h1>
        </p>
        <button className="overlay-button">Find Stories & Places</button>
      </div>
    </div>
  )
}

export default HeroImage
