import React from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import ExploreIcon from "@mui/icons-material/Explore"
import HikingIcon from "@mui/icons-material/Hiking"
import HandshakeIcon from "@mui/icons-material/Handshake"
const AmericasStoryHeroImage = () => {

  return (
    <>
      <div className="row">
        <div className="row">
          <div className="first">
            PLAN YOUR VISIT
              <ExploreIcon className="icons" sx={{ fontSize: '50px', color: 'black', border: '', borderRadius: '50%', padding: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}/>
          </div>
          <div className="second">
            LEARN & EXPLORE
              <HikingIcon className="icons" sx={{ fontSize: '50px', color: 'black', border: '', borderRadius: '50%', padding: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}/>
          </div>

          <div className="third">
            GET INVOLVED
              <HandshakeIcon className="icons" sx={{ fontSize: '50px', color: 'black', border: '', borderRadius: '50%', padding: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}/>
          </div>
        </div>
        <img
          alt="Nationa parks"
          style={{ width: "100vw", height: "50vh" }}
          className="americas-image"
          src="https://cdn.aarp.net/content/dam/aarp/travel/Domestic/2020/07/1140-rocky-mountain-national-park.jpg"
        />
      </div>
    </>
  )
}

export default AmericasStoryHeroImage
