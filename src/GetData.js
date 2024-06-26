import React, { useState, useEffect } from "react"

// import Box from "@mui/material-box"
const GetData = () => {
  const [image, setImage] = useState()
  const [parkData, setParkData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = "ACTtwg9kV0YavegYOa6xKy3ATw2aYmnjdEnOEf6j" // Replace "YOUR_API_KEY" with your actual API key

      const getRequest = await fetch(
        `https://developer.nps.gov/api/v1/parks?api_key=${apiKey}`
      )
      const data = await getRequest.json()
      setParkData(data.data) // Assuming the data structure contains a 'data' property

      console.log(data)
    }
    fetchData()
  }, [])

  const handleClick = async () => {
    const apiKey = "ACTtwg9kV0YavegYOa6xKy3ATw2aYmnjdEnOEf6j" // Replace "YOUR_API_KEY" with your actual API key

    const getRequest = await fetch(
      `https://developer.nps.gov/api/v1/parks?api_key=${apiKey}`
    )
    const data = await getRequest.json()
    console.log(data)
  }
  return (
    <div>
      {parkData.map((park) => {
        return (
          <div key={park.id}>
            <div>
              {park.images.length > 0 && (
                <img
                  width="200px"
                  height="100%"
                  key={park.images[0].url}
                  src={park.images[0].url}
                  alt="ParkImage"
                />
              )}
            </div>
            <h2>{park.fullName}</h2>
          </div>
        )
      })}
      {/* <button onClick={handleClick}>Click me</button> */}
    </div>
  )
}
export default GetData
