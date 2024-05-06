import React from "react"
import TextField from "@mui/material/TextField"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
const SearchParks = () => {
  return (
    <div className="search-for-park">
      <h3 style={{ marginTop: "0", marginLeft: "35px" }}>Find a Park</h3>
      <TextField
        style={{
          backgroundColor: "white",
          marginLeft: "30px",
          marginBottom: "30px",
          borderRadius: "20px",
          width: "40%",
          color:"black"
        }}
        label="By State..."
                InputLabelProps={{ style: { color: "black" } }}

      >

        By State..

      </TextField>

    </div>
  )
}
export default SearchParks
