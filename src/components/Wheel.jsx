import React from 'react'

import "../css/Wheel.css"

export default function Wheel({ angle = 45, speed = 0 }) {
    


    return(
        <div className="wheel-container">
            <div className="wheel-size" style={{transform: `rotate(${-45 + angle}deg)`}}>
                <div className="direction-arrow">
                </div>
                <svg>
                    <rect className="wheel-rect" />
                </svg>
            </div>
            <div className="stats">
                <ul>
                    <li>New Angle: {angle-45}</li>
                    <li>New Speed: {speed}</li>
                </ul>
            </div>
        </div>
    )
}