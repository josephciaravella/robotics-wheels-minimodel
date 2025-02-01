import React, { useEffect } from "react";

import "../css/Wheel.css"

export default function Wheel() {
    
    const [wheel, setWheel] = React.useState({
        angle: 0,
        speed: 0
    })


    function generateNewValues() {
        const newSpeed = Math.floor(Math.random() * 21) 
        const newAngle = Math.floor(Math.random() * 91)
        return { newSpeed, newAngle }
    }

    function handleClick() {
        const { newSpeed, newAngle } = generateNewValues()
        setWheel(() => {
            return {
                angle: newAngle,
                speed: newSpeed
            }
        })
    }

    return(
        <div className="wheel-container">
            <div className="wheel-size" style={{transform: `rotate(${-45 + wheel.angle}deg)`}}>
                <div className="direction-arrow">
                </div>
                <svg>
                    <rect className="wheel-rect" />
                </svg>
            </div>
            <div>
                <button onClick={handleClick}>Generate new Values</button>
                <ul>
                    <li>New Angle: {wheel.angle}</li>
                    <li>New Speed: {wheel.speed}</li>
                </ul>
            </div>
        </div>
    )
}