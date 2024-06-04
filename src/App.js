import "./App.css"
import AppBar from "./AppBar"
import HeroImage from "./HeroImage"
import GetData from "./GetData"
import SearchParks from "./SearchParks"
import FeaturedStories from "./FeaturedStories"
import AmericasStoryHeroImage from "./AmericasStoryHeroImage"
function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", padding: "none" }}>
      <AppBar />
      <HeroImage />
      <SearchParks />
      <FeaturedStories />
      <AmericasStoryHeroImage />
    </div>
  )
}

export default App
