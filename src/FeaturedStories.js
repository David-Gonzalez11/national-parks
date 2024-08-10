import React, { useState, useEffect } from "react"

const FeaturedStories = () => {
  const [getStories, setgetStories] = useState([])

  const getStoriesData = async () => {
    const apiKey = "ACTtwg9kV0YavegYOa6xKy3ATw2aYmnjdEnOEf6j" // Replace "YOUR_API_KEY" with your actual API key

    const response = await fetch(
      `https://developer.nps.gov/api/v1/articles?api_key=ACTtwg9kV0YavegYOa6xKy3ATw2aYmnjdEnOEf6j`
    )
    const data = await response.json()
    const limitedStories = data.data.slice(0, 6) // Limit to 12 stories

    setgetStories(limitedStories)
    console.log(data)
  }

  useEffect(() => {
    getStoriesData()
  }, []) // Empty de
  return (
    <div>
      <div  className="featuredStories-text">
      <h3 >Featured Stories</h3>

      </div>
      <div className="stories-container">
        {getStories.map((story, index) => (
          <div key={index} className="story-card">

            {story.listingImage.url ? (
              <>
                <img
                  src={story.listingImage.url}
                  alt={story.listingImage.altText || story.title}
                  className="featured-stories-img"
                />
                 <h4 className="story-title">{story.title}</h4>
                <div className="story-description">{story.listingDescription}</div>
                <div>
                  <a
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read more
                  </a>
                </div>
              </>
            ) : (
              <p>No image available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
export default FeaturedStories
