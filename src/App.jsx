import react from "react"
import "./index.scss"
import "./layout.scss"
import Navbar from "../components/Navbar/Navbar"
import "../components/Navbar/navbar.scss"
import HomePage from "../components/HomePage/homePage"

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <Navbar/>
      </div>
      <div className="content">
        <HomePage/>
      </div>
    </div>
  )
}

export default App