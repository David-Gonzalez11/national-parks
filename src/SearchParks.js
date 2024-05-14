import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"

import Select from "@mui/material/Select"
const SearchParks = () => {
  const [state, setState] = useState("")

  return (
    <>
      <div className="search-for-park">
        <div className="width-50">
          <h3 style={{ marginTop: "0", marginLeft: "35px" }}>Find a Park</h3>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label width-50">Age</InputLabel>
            <Select
              style={{ backgroundColor: "white" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={state}
              label="Age"
              // onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="width-50" full>
          <InputLabel id="demo-simple-select-label width-50">Age</InputLabel>
          <Select
            fullWidth
            style={{ backgroundColor: "white" }}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={state}
            label="Age"
            // onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </div>
      </div>
    </>
  )
}
export default SearchParks
