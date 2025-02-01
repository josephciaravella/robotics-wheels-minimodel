import React from "react"
import Wheel from "./components/Wheel"
import "./css/index.css"

function App() {
  return (
    <div className="wheel-grid">
      <div className="cell"><Wheel /></div>
      <div className="cell"><Wheel /></div>
      <div className="cell"><Wheel /></div>
      <div className="cell"><Wheel /></div>
    </div>
  )
}

export default App
