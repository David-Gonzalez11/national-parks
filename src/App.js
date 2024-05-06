import "./App.css"
import AppBar from "./AppBar"
import HeroImage from "./HeroImage"
import  GetData  from "./GetData"
import SearchParks from "./SearchParks"

function App() {
  return (
    <div style={{width:"100vw", height:"100vh", padding: "none"}}>
      <AppBar />
      <HeroImage />
      <SearchParks />
      {/* <GetData /> */}

    </div>
  )
}

export default App
