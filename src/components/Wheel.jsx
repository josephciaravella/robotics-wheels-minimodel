import React, { useEffect } from "react";

import "../css/Wheel.css"

export default function Wheel() {
    
    // const [wheel, setWheel] = React.useState({
    //     angle: 0,
    //     speed: 0
    // })


    // function generateNewValues() {
    //     return Math.floor(Math.random() * 21), Math.floor(Math.random() * 361)
    // }

    // useEffect(() => {
    //     newSpeed, newAngle = generateNewValues()
    //     setWheel(() => {
    //         return {
    //             angle: newAngle,
    //             speed: newSpeed
    //         }
    //     })
    // }, [])

    return(
        <div className="wheel-container">
            <div className="wheel-size">
                <div className="direction-arrow">
                </div>
                <svg>
                    {/* <rect className="wheel-rect" transform={`rotate({${90-wheel.angle}})`}/> */}
                    <rect className="wheel-rect"/>
                </svg>
            </div>
        </div>
    )
}