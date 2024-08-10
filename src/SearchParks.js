import React, { useState, useEffect } from "react"
import TextField from "@mui/material/TextField"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"

import Select from "@mui/material/Select"
const SearchParks = () => {
  const [stateData, setStateData] = useState([])
  const [selectedState, setSelectedState] = useState("")
  const [topicData, setTopicData] = useState([])
  const [selectedTopic, setSelectedTopic] = useState("")

  const getStateData = async () => {
    const response = await fetch(
      "https://developer.nps.gov/api/v1/parks?&start=2&api_key=ACTtwg9kV0YavegYOa6xKy3ATw2aYmnjdEnOEf6j"
    )
    const data = await response.json()
    console.log(data.data)
    setStateData(data.data)
    return stateData
  }

  const getTopicData = async () => {
    const response = await fetch(
      "https://developer.nps.gov/api/v1/parks?&start=2&api_key=ACTtwg9kV0YavegYOa6xKy3ATw2aYmnjdEnOEf6j"
    )
    const data = await response.json()
     const topics = data.data.flatMap((park) =>
      park.topics.map((topic) => ({
        name: topic.name,
        url: park.url, // Store the park URL associated with the topic
      }))
    )

    // console.log("topicData", data.data[0].topics)
    setTopicData([...new Set(topics.map(t => JSON.stringify(t)))].map(t => JSON.parse(t))) // Remove duplicates
    return topicData
  }
  useEffect(() => {
    getStateData()
  }, [])

  const handleChange = (event) => {
    setSelectedState(event.target.value)
    const selectedPark = stateData.find(
      (state) => state.states === event.target.value
    )
    if (selectedPark) {
      window.location.href = selectedPark.url
    }
  }

  const handleTopicChange = (event) => {

    setSelectedTopic(event.target.value)
const selectedTopic = topicData.find(
      (topic) => topic.name === event.target.value
    )
    if (selectedTopic) {
      window.location.href = selectedTopic.url
    }
  }
  return (
    <>
      <div className="search-for-park">
        <div className="width-50">
          <h3 style={{ marginTop: "0", marginLeft: "35px" }}>Find a Park</h3>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label width-50">
              State
            </InputLabel>
            <Select
              style={{ backgroundColor: "white" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedState}
              label="state"
              onClick={getStateData}
              onChange={handleChange}
            >
              {stateData.map((s) => (
                <MenuItem key={s.id} value={s.states}>
                  <a href={s.url}>{s.states}</a>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div style={{ paddingLeft: "20px", paddingRight: "20px" }}>
          <h2>or</h2>
        </div>
        <div className="width-50">
          <h3 style={{ marginTop: "0", marginLeft: "35px" }}>
            Explore America's Story
          </h3>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">By Topic...</InputLabel>
            <Select
              style={{ backgroundColor: "white" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedTopic}
              label="By Topic..."
              onChange={handleTopicChange}
              onClick={getTopicData}
            >
              {topicData &&
                topicData.map((topic, index) => (
                  <MenuItem key={index} value={topic.name}>
                    <a href={topic.url}>{topic.name}</a>
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>
      </div>
    </>
  )
}
export default SearchParks
